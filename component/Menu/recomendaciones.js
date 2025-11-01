import style from "@/styles/Menu/menu.module.css"
import Image from "next/image";

export default function Recomendaciones({ mostrarModulo }) {
    return (
        <div className={`${style.cajaAzul} ${style.recomendado}`}>
            <h2 className={style.colorH2}>
                Módulos Recomendados:
            </h2>

            <div
                hidden={mostrarModulo[0]}
            >
                <a href="/autoayudaG2">
                    <Image
                        src="/Menu/motivacion.png"
                        alt="Modulo de Autoyuda"
                        width={180}
                        height={180}
                    ></Image>

                    <p>Quiero ser mejor</p>
                </a>
            </div>

            <div
                hidden={mostrarModulo[1]}
            >
                <a href="/autoayudaG5">
                    <Image
                        src="/Menu/motivacion.png"
                        alt="Modulo de Autoyuda"
                        width={180}
                        height={180}
                    ></Image>

                    <p>Autoevaluación y Consejos</p>
                </a>
            </div>

            <div
                hidden={mostrarModulo[2]}
            >
                <a href="/nutricion">
                    <Image
                        src="/Menu/nutricion.jpg"
                        alt="Modulo de Nutrición"
                        width={180}
                        height={110}
                    ></Image>

                    <p>Me alimento bien</p>
                </a>
            </div>

            <div
                hidden={mostrarModulo[3]}
            >
                <a href="/coach">
                    <Image
                        src="/Menu/coach.jpg"
                        alt="Modulo de Coach Laboral"
                        width={180}
                        height={110}
                    ></Image>

                    <p>Soy emprendedor</p>
                </a>
            </div>

            <div
                hidden={mostrarModulo[4]}
            >
                <a href="/crianza">
                    <Image
                        src="/Menu/familia.png"
                        alt="Modulo de Crianza"
                        width={180}
                        height={124}
                    ></Image>

                    <p>Soy madre</p>
                </a>
            </div>
        </div>
    );
}