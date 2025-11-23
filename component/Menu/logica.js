import style from "@/styles/Menu/menu.module.css"
import { useEffect, useState, useRef } from "react";
import { saludos } from "./saludos";
import dynamic from "next/dynamic";
import { marked } from "marked";
import DOMPurify from "dompurify";

const Recomendaciones = dynamic(() => import("@/component/Menu/recomendaciones"));

export default function Logica() {
    const [contador, setContador] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [respuesta, setRespuesta] = useState("")

    const [moduloReco, setModuloReco] = useState([true, true, true, true, true]);

    // Referencia para hacer foco en la respuesta tras enviar
    const respuestaRef = useRef(null);

    // useEffect(() => {...}, []);
    // Para que se cargue un saludo aleatorio solo una vez al montar el componente (cargue la página).
    // De lo contrario, si se coloca fuera del useEffect, el contenido causaría un bucle infinito.
    useEffect(() => {
        const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
        setRespuesta(saludoAleatorio);
    }, []);

    useEffect(() => {
        // Enfocar la respuesta para accesibilidad
        if (respuestaRef.current) {
            respuestaRef.current.focus();
        }
    }, [respuesta]);

    function actualizarContador(e) {
        setContador(e.target.value.length);
    }

    // Funciones para enviar, recibir, filtrar y formatear.

    async function EnviarMensaje(event) {
        event.preventDefault(); // ← evita recarga

        setEnviando(true);
        try {
            const res = await fetch("/api/Menu/envio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mensaje: userInput })
            });
            const data = await res.json();

            // --- Verificar si hay un campo 'error' y registrarlo
            if (data.error) {
                console.warn("Error detectado en la respuesta:", data.error);
                // Aquí se podría enviar a un log seguro o sistema de monitoreo
            }

            verificarMensaje(data.reply);

            let html = clearTags(data.reply);

            html = marked.parse(html);
            // Se convierte la respuesta filtrada a formato HTML desde Markdown

            setRespuesta(DOMPurify.sanitize(html));
            // Se sanitiza el HTML resultante por seguridad

            setUserInput("");
            setContador(0);
        } catch (error) {
            setRespuesta("Error en el servidor.");
        } finally {
            setEnviando(false);
        }
    }

    function verificarMensaje(respuesta) {
        const etiquetas = respuesta.match(/###\s*([^\n#]+)/gmi) || [];
        const texto = etiquetas.join(" ").toLowerCase();

        actuReco(0, !texto.includes("autoayudag2"));
        actuReco(1, !texto.includes("autoayudag5"));
        actuReco(2, !(texto.includes("nutrición") || texto.includes("nutricion")));
        actuReco(3, !texto.includes("coach laboral"));
        actuReco(4, !texto.includes("crianza"));
    }

    function actuReco(position, valor) {
        setModuloReco(prev => {
            const nuevo = [...prev]; // copia del estado anterior
            nuevo[position] = valor; // modificas solo lo necesario
            return nuevo;            // devuelves el nuevo estado
        });
    }

    function clearTags(texto) {
        return texto.replace(
            /###\s*(autoayudag2|autoayudag5|nutrición|nutricion|coach laboral|crianza)/gi,
            "")
            .trim();
    }

    return (
        <div className={style.cuerpo}>
            <div className={style.columnaFlex}>
                <form
                    className={style.columnaFlex}
                    onSubmit={EnviarMensaje}
                >
                    <div className={`${style.box} ${style.textoInfo}`}>
                        <textarea
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            // Necesario para cambiar el valor de la variable
                            rows={6}
                            placeholder="Escribe tu mensaje..."
                            onInput={actualizarContador}
                            maxLength={300}
                            required
                        ></textarea>

                        <small>
                            {contador}/300
                        </small>
                    </div>

                    <button
                        className={style.btnPrimario}
                        type="submit"
                        disabled={enviando}
                        aria-busy={enviando}
                    >
                        {enviando ? "Procesando..." : "Enviar"}
                    </button>
                </form>

                <div
                    className={`${style.response} ${style.cajaAzul}`}
                    role="region"
                    tabIndex={0}
                    ref={respuestaRef}
                    dangerouslySetInnerHTML={{ __html: respuesta }}
                // Inserta contenido HTML directamente en el elemento
                // (útil para mostrar texto con formato, como Markdown convertido a HTML).
                ></div>
            </div>

            <Recomendaciones mostrarModulo={moduloReco} />
        </div>
    );
}