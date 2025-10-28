import dynamic from "next/dynamic"
import Head from "next/head"
import styleMenu from "@/styles/Menu/menu.module.css"

const Toggle = dynamic(() => import("@/component/Menu/toggle"));

export default function Coach() {
    return (
        <>
            <Head>
                <title>Coach Laboral</title>
                <meta name="description" content="Modulo de Coah Laboral" />
            </Head>
            <div className={styleMenu.pag}>
                <Toggle ocultarModulo={"coach"} />

                <main></main>
            </div>
        </>
    )
}