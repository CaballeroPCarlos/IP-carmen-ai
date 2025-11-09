import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import style from "@/styles/Menu/menu.module.css"

export default function Toggle({ ocultarModulo }) {
    const [isOpen, setIsOpen] = useState(false);

    // Referencias para manejo del foco
    const panelRef = useRef(null);

    const togglePanel = () => setIsOpen(prev => !prev);

    // Manejo del foco según WCAG 2.1
    useEffect(() => {
        if (isOpen && panelRef.current) {
            panelRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div>
            {/* Overlay */}
            {isOpen && (
                <div
                    className={style.overlay}
                    role="presentation"
                    onClick={togglePanel}
                ></div>
            )}

            {/* Botón de apertura/cierre */}
            <button
                onClick={togglePanel}
                className={`${style.panelBtn} ${style.btnPrimario} ${isOpen ? style.open : ""}`}
                aria-expanded={isOpen}
                aria-controls="panel-lateral"
                aria-label={isOpen ? "Cerrar menú lateral" : "Abrir menú lateral"}
                onMouseDown={e => e.preventDefault}
                onTouchStart={e => e.preventDefault}
            >
                {isOpen ? "←" : "→"}
            </button>

            <div
                id="panel-lateral"
                className={`${style.sidePanel} ${style.cajaAzul} ${isOpen ? style.open : ""}`}
                role="navigation"
                aria-label="Módulos Disponibles"
                tabIndex={-1}
                ref={panelRef}
            >
                <h2 className={style.colorH2}>Módulos disponibles</h2>

                <div
                    hidden={ocultarModulo === "menu"}
                >
                    <a href="/">
                        <Image
                            className={style.logo}
                            src="/Menu/logo.png"
                            alt="chatbot Carmen-AI"
                            width={130}
                            height={60}
                        ></Image>

                        <p>Te acompaño a crecer</p>
                    </a>
                </div>

                <div
                    hidden={ocultarModulo === "autoayudaG2"}
                >
                    <a href="/autoayudaG2">
                        <Image
                            className={style.logo}
                            src="/Menu/motivacion.png"
                            alt="Modulo de Autoyuda"
                            width={130}
                            height={130}
                        ></Image>

                        <p>Quiero ser mejor</p>
                    </a>
                </div>

                <div
                    hidden={ocultarModulo === "autoayudaG5"}
                >
                    <a href="/autoayudaG5">
                        <Image
                            className={style.logo}
                            src="/Menu/motivacion.png"
                            alt="Modulo de Autoyuda"
                            width={130}
                            height={130}
                        ></Image>

                        <p>Autoevaluación y Consejos</p>
                    </a>
                </div>

                <div
                    hidden={ocultarModulo === "nutricion"}
                >
                    <a href="/nutricion">
                        <Image
                            className={style.logo}
                            src="/Menu/nutricion.jpg"
                            alt="Modulo de Nutrición"
                            width={130}
                            height={80}
                        ></Image>

                        <p>Me alimento bien</p>
                    </a>
                </div>

                <div
                    hidden={ocultarModulo === "coach"}
                >
                    <a href="/coach">
                        <Image
                            className={style.logo}
                            src="/Menu/coach.jpg"
                            alt="Modulo de Coach Laboral"
                            width={130}
                            height={80}
                        ></Image>

                        <p>Soy emprendedor</p>
                    </a>
                </div>

                <div
                    hidden={ocultarModulo === "crianza"}
                >
                    <a href="/crianza">
                        <Image
                            className={style.logo}
                            src="/Menu/familia.png"
                            alt="Modulo de Crianza"
                            width={130}
                            height={90}
                        ></Image>

                        <p>Soy madre</p>
                    </a>
                </div>
            </div>
        </div >
    );
}