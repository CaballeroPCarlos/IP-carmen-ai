import Image from "next/image";
import { useState } from "react";
import style from "@/styles/Menu/menu.module.css"

export default function Toggle({ ocultarModulo }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* Overlay */}
            {isOpen && <div className={style.overlay} onClick={togglePanel}></div>}

            {/* Botón de apertura/cierre */}
            <button
                onClick={togglePanel}
                className={`${style.panelBtn} ${isOpen ? style.open : ""}`}
            >
                {isOpen ? "←" : "→"}
            </button>

            <div
                className={`${style.sidePanel} ${isOpen ? style.open : ""}`}
            >
                <h2>Módulos disponibles</h2>

                <div
                    hidden={ocultarModulo === "menu"}
                >
                    <a href="/">
                        <Image
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