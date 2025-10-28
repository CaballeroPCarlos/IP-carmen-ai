import Head from "next/head";
import Image from "next/image";
import style from "@/styles/Menu/menu.module.css"
import dynamic from "next/dynamic";

const Logica = dynamic(() => import("@/component/Menu/logica"));
const Toggle = dynamic(() => import("@/component/Menu/toggle"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Carmen-AI</title>
        <meta name="description" content="Proyecto" />
      </Head>
      <div className={style.pag}>
        <Toggle ocultarModulo={"menu"} />
        <main className={style.main}>
          <div className={style.encabezado}>
            <div>
              <Image
                className={style.logo}
                src="/Menu/logo.png"
                alt="Logo del Proyecto"
                width={180}
                height={80}
              />
            </div>
            <div className={style.intro}>
              <h2>
                Chat con Carmen-AI
              </h2>
              <p>
                <strong>Módulos permitidos:</strong> Autoayuda, Nutrición, Coach laboral, Crianza
              </p>
            </div>
          </div>
          <Logica />
        </main>
      </div>
    </>
  );
}
