import dynamic from "next/dynamic"
import Head from "next/head"
import styleMenu from "@/styles/Menu/menu.module.css"

const Toggle = dynamic(() => import("@/component/Menu/toggle"));

export default function Crianza() {
    return (
        <>
            <Head>
                <title>Crianza</title>
                <meta name="description" content="Modulo de Crianza" />
            </Head>
            <div className={styleMenu.pag}>
                <Toggle ocultarModulo={"crianza"} />

                <main></main>
            </div>
        </>
    )
}