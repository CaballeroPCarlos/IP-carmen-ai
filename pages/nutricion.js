import dynamic from "next/dynamic"
import Head from "next/head"
import styleMenu from "@/styles/Menu/menu.module.css"

const Toggle = dynamic(() => import("@/component/Menu/toggle"));

export default function Nutricion() {
    return (
        <>
            <Head>
                <title>Nutrición</title>
                <meta name="description" content="Modulo de Nutrición" />
            </Head>
            <div className={styleMenu.pag}>
                <Toggle ocultarModulo={"nutricion"} />

                <main></main>
            </div>
        </>
    )
}