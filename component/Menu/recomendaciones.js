import style from "@/styles/Menu/menu.module.css"
import Image from "next/image";

export default function Recomendaciones({ mostrarModulo }) {
    return (
        <div
            className={`${style.cajaAzul} ${style.recomendado}`}
            role="region"
            aria-labelledby="titulo-recomendados"
        >
            <h2
                className={style.colorH2}
                id="titulo-recomendados"
            >
                Módulos Recomendados:
            </h2>

            {!mostrarModulo[0] && (
                <a
                    href="/autoayudaG2"
                    aria-label="Abrir módulo Quiero ser Mejor, sección de autoayuda"
                >
                    <Image
                        className={style.logo}
                        src="/Menu/motivacion.png"
                        alt="Ilustración del Módulo Quiero ser Mejor"
                        width={180}
                        height={180}
                    ></Image>

                    <p>Quiero ser mejor</p>
                </a>
            )}

            {!mostrarModulo[1] && (
                <a
                    href="/autoayudaG5"
                    aria-label="Abrir módulo Autoevaluación y Consejos, sección de autoayuda"
                >
                    <Image
                        className={style.logo}
                        src="/Menu/motivacion.png"
                        alt="Ilustración del módulo Autoevaluación y Consejos"
                        width={180}
                        height={180}
                    ></Image>

                    <p>Autoevaluación y Consejos</p>
                </a>
            )}

            {!mostrarModulo[2] && (
                <a
                    href="/nutricion"
                    aria-label="Abrir módulo de Nutrición"
                >
                    <Image
                        className={style.logo}
                        src="/Menu/nutricion.jpg"
                        alt="Ilustración del módulo de Nutrición"
                        width={180}
                        height={110}
                    ></Image>

                    <p>Me alimento bien</p>
                </a>
            )}

            {!mostrarModulo[3] && (
                <a
                    href="/coach"
                    aria-label="Abrir módulo de Coach Laboral"
                >
                    <Image
                        className={style.logo}
                        src="/Menu/coach.jpg"
                        alt="Ilustración del módulo de Coach Laboral"
                        width={180}
                        height={110}
                    ></Image>

                    <p>Soy emprendedor</p>
                </a>
            )}

            {!mostrarModulo[4] && (
                <a
                    href="/crianza"
                    aria-label="Abrir módulo de Crianza"
                >
                    <Image
                        className={style.logo}
                        src="/Menu/familia.png"
                        alt="Ilustración del módulo de Crianza"
                        width={180}
                        height={124}
                    ></Image>

                    <p>Soy madre</p>
                </a>
            )}
        </div>
    );
}