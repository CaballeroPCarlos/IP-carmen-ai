import style from "@/styles/Menu/menu.module.css"
import { useState } from "react";

export default function Logica() {
    const [contador, setContador] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [respuesta, setRespuesta] = useState("")

    function actualizarContador(e) {
        setContador(e.target.value.length);
    }

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
            setRespuesta(data.reply);
            setUserInput("");
        } catch (error) {
            setRespuesta("Error en el servidor.");
        } finally {
            setEnviando(false);
        }
    }

    return (
        <div>
            <div className={style.envio}>
                <form onSubmit={EnviarMensaje}>
                    <div className={style.box}>
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
                        </small></div>
                    <button
                        type="submit"
                        disabled={enviando}
                    >
                        {enviando ? "Procesando..." : "Enviar"}
                    </button>
                </form>
                <div
                    id="response"
                    className={style.response}
                >
                    {respuesta}
                </div>
            </div>
        </div>
    );
}