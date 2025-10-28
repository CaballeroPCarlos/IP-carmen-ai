import dynamic from "next/dynamic"
import Head from "next/head"
import styleMenu from "@/styles/Menu/menu.module.css"

const Toggle = dynamic(() => import("@/component/Menu/toggle"));

export default function AutoayudaG5() {
    return (
        <>
            <Head>
                <title>Autoayuda</title>
                <meta name="description" content="Autoevaluación y Consejos" />
            </Head>
            <div className={styleMenu.pag}>
                <Toggle ocultarModulo={"autoayudaG5"} />

                <main></main>
            </div>
        </>
    )
}