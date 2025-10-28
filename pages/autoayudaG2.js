import dynamic from "next/dynamic"
import Head from "next/head"
import styleMenu from "@/styles/Menu/menu.module.css"

const Toggle = dynamic(() => import("@/component/Menu/toggle"));

export default function AutoayudaG2() {
    return (
        <>
            <Head>
                <title>Autoayuda</title>
                <meta name="description" content="Modulo de Autoayuda" />
            </Head>
            <div className={styleMenu.pag}>
                <Toggle ocultarModulo={"autoayudaG2"} />

                <main></main>
            </div>
        </>
    )
}