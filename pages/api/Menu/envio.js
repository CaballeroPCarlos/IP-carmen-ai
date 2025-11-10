import { systemPrompt } from "@/component/Menu/systemPromt";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { mensaje } = req.body;

    if (!mensaje) {
        return res.status(400).json({ error: "Solicitud inválida: falta 'mensaje'." });
    }

    // Lista de llaves desde tu .env.local
    const keys = [
        process.env.OPENROUTER_KEY_1,
        process.env.OPENROUTER_KEY_2,
        process.env.OPENROUTER_KEY_3,
        process.env.OPENROUTER_KEY_4,
        process.env.OPENROUTER_KEY_5,
    ].filter(Boolean); // ← elimina llaves vacías

    let respuestaFinal = null;

    for (const key of keys) {
        try {
            const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: process.env.ModeloIA,
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: mensaje }
                    ]
                })
            });

            const data = await resp.json();

            if (resp.ok && data?.choices?.[0]?.message?.content) {
                respuestaFinal = data.choices[0].message.content;
                break; // ← detiene cuando una llave funcionó
            }

        } catch (e) {
            // Solo pasa a la siguiente llave
            continue;
        }
    }

    if (!respuestaFinal) {
        return res.status(500).json({
            error: "Todas las claves fallaron o no hubo respuesta.",
            reply: "Todas fallaron."
        });
    }

    return res.status(200).json({ reply: respuestaFinal });
}
