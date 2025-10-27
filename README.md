# Índice – Te acompaño a Crecer: Fase de Integración

- [Índice – Te acompaño a Crecer: Fase de Integración](#índice--te-acompaño-a-crecer-fase-de-integración)
- [Te acompaño a Crecer: Fase de Integración](#te-acompaño-a-crecer-fase-de-integración)
  - [Diccionario de Palabras Clave](#diccionario-de-palabras-clave)
  - [Tecnologías seleccionadas](#tecnologías-seleccionadas)
  - [Características del CSS](#características-del-css)
    - [Flexbox y distribución](#flexbox-y-distribución)
    - [Estilos específicos](#estilos-específicos)
  - [Paleta de colores utilizada](#paleta-de-colores-utilizada)
  - [Requisitos previos](#requisitos-previos)
    - [1️⃣ Preparar entorno](#1️⃣-preparar-entorno)
    - [2️⃣ Configuración de Prisma](#2️⃣-configuración-de-prisma)
    - [3️⃣ Ejecutar proyecto Next.js](#3️⃣-ejecutar-proyecto-nextjs)
  - [Uso de Next](#uso-de-next)
    - [Estilos](#estilos)
    - [Variables](#variables)
    - [Componentes](#componentes)

# Te acompaño a Crecer: Fase de Integración

El objetivo es integrar de forma adecuada los módulos propuestos:

- Te acompaño a crecer (Asistente virtual)
- Quiero ser mejor (Autoayuda)
- Soy emprendedora (Coach laboral)
- Me alimento bien (Nutrición)
- Soy Madre (Me enfoco a sus hijos)

---

## Diccionario de Palabras Clave

* **AutoayudaG2:** autoestima, emociones, hábitos positivos, motivación.
* **AutoayudaG5:** evaluación personal, apoyo emocional, consejos, servicios de ayuda.
* **Coach laboral:** habilidades laborales, talleres, educación, orientación profesional.
* **Nutrición:** alimentos saludables, memoria, hábitos alimenticios.
* **Crianza:** registro del niño, IMC, crecimiento, salud infantil.

---

## Tecnologías seleccionadas

1. **Frontend y Backend:** *Next.js* (framework full-stack).
2. **Base de Datos:** *Neon PostgreSQL*, gestionada mediante *Prisma ORM* para el modelado y la manipulación de datos, para los grupos quienes lo necesiten.
3. **Hosting y Despliegue:** *Vercel*, como plataforma principal para producción y previsualización.
4. **API Externa:** Uso de la **API DeepSeek R1T2 Chimera (versión free) a través de OpenRouter**, utilizada únicamente para generar texto. Las respuestas serán **procesadas y filtradas internamente** para detectar marcadores o cadenas específicas que permitan **habilitar funciones en la aplicación**

---

## Características del CSS

* `padding: 40px 120px;`: Establece un espacio interno amplio en los lados, manteniendo el contenido despejado. En pantallas pequeñas se reduce a `40px 40px` para conservar la proporción.
* `gap: 15px;`: Define la separación uniforme entre elementos dentro de contenedores flexibles, mejorando la legibilidad visual.
* `border-radius: 5px;`: Aplica un leve redondeado a elementos como imágenes, botones o tarjetas, aportando suavidad al diseño.
* `font-size: 0.9rem;` o `1rem;`: Ajusta el tamaño del texto según el elemento para asegurar claridad sin sobrecargar visualmente.

### Flexbox y distribución

* `display: flex;`: Organiza elementos internos permitiendo alineación responsiva.
* `flex-direction: column;`: Acomoda los elementos verticalmente, ideal para formularios, secciones descriptivas o bloques de contenido.
* `flex-direction: row;` junto con `flex-wrap: wrap;`: Ubica elementos en fila y permite que pasen a la siguiente línea si no tienen espacio, garantizando adaptabilidad.
* `justify-content: center;`: Centra horizontalmente el contenido en contenedores como `.intro`.
* `gap: 10px;` o `15px;`: Genera separaciones limpias en headers, bloques y secciones de entrada.

### Estilos específicos

* `.intro h2 { color: #106efc; }`: Destaca los subtítulos aplicando el color principal de la paleta, creando jerarquía visual.
* `.box textarea { padding: 13px; resize: none; border-radius: 5px; }`: Mejora la experiencia de escritura manteniendo un área cómoda y estética.
* `.box small { position: absolute; bottom: 10px; right: 15px; color: #6c757d; font-size: 0.8rem; }`: Muestra un texto auxiliar dentro del contenedor sin interferir con la interacción.
* `.envio button { background-color: #106efc; color: white; cursor: pointer; }`: Crea un botón claro y llamativo que transmite acción.
* `.envio button:hover { background-color: #3b89ff; border: 2px solid #106efc; }`: Añade retroalimentación interactiva visual al pasar el cursor.
* `.response { background-color: #b6e0f2; border: 2px solid #106efc; border-radius: 5px; }`: Muestra las respuestas con un estilo suave y legible, claramente separado del resto del contenido.

---

## Paleta de colores utilizada

| Color            | Hex       | Uso principal                       | Muestra                                                                                                    |
| ---------------- | --------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Azul principal   | `#106efc` | Títulos, botones, bordes destacados | <div style="width:25px; height:25px; background:#106efc; border-radius:4px;"></div>                        |
| Azul claro hover | `#3b89ff` | Hover de botones / interacción      | <div style="width:25px; height:25px; background:#3b89ff; border-radius:4px;"></div>                        |
| Azul suave fondo | `#b6e0f2` | Fondo de contenedores de respuesta  | <div style="width:25px; height:25px; background:#b6e0f2; border-radius:4px;"></div>                        |
| Gris secundario  | `#6c757d` | Texto auxiliar o notas pequeñas     | <div style="width:25px; height:25px; background:#6c757d; border-radius:4px;"></div>                        |
| Blanco           | `#ffffff` | Fondos, contraste y texto           | <div style="width:25px; height:25px; background:#ffffff; border-radius:4px; border:1px solid #ccc;"></div> |

---

## Requisitos previos

### 1️⃣ Preparar entorno

1. **Node.js**: Instala la versión estable desde [nodejs.org](https://nodejs.org/es).
2. **PowerShell** (Windows): Habilita scripts si es necesario:

   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

   > PD: la PowerShell se abre en cualquier directorio con: `shift + click derecho`

3. **Clonar proyecto**:

   ```bash
   git clone <url-del-proyecto>
   cd <nombre-del-proyecto>
   ```
4. **Instalar dependencias**:

   ```bash
   npm install
   ```

---

### 2️⃣ Configuración de Prisma

1. **Instalar Prisma y cliente** (si no está ya en `package.json`):

   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```

2. **Inicializar Prisma** (si no existe `prisma/schema.prisma`):

   ```bash
   npx prisma init
   ```

   Esto crea `.env` y `prisma/schema.prisma`.

3. **Configurar conexión a la base de datos**:
   En `.env`, coloca tu `DATABASE_URL` de PostgreSQL:

   ```env
   DATABASE_URL="postgresql://usuario:password@host:puerto/dbname"
   ```

4. **Definir modelo de datos** en `prisma/schema.prisma` (ejemplo mínimo):

   ```prisma
   generator client {
     provider = "prisma-client-js"
   }

   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }

   model Persona {
     id     Int    @id @default(autoincrement())
     nombre String
     edad   Int
   }
   ```

5. **Ejecutar migraciones iniciales**:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

---

### 3️⃣ Ejecutar proyecto Next.js

1. **Levantar servidor de desarrollo**:

   ```bash
   npm run dev
   ```
2. Abre en navegador: [http://localhost:3000](http://localhost:3000)

---

## Uso de Next

### Estilos

Los estilos se pueden colocar como si fuera un html normal. Pero Next tiene su propio orden, que seria el siguiente:

1. La importación:
   - `import style from "@/styles/Menu/menu.module.css"`
    Se debe iniciar con `@/`

2. Uso:
   
   - `<div className={style.envio}>`

3. Clase:

   ```
    .envio {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
   ```

### Variables

Las variables se deben declarar desde el inicio, por obviedad. Pero lo importante es que React no usa: `document.getElementById('userInput')`, sino variables.

1. Import:
   - `import { useState } from "react";`

2. Declaración:

   ```
   const [contador, setContador] = useState(0);
   const [userInput, setUserInput] = useState("");
   const [enviando, setEnviando] = useState(false);
   const [respuesta, setRespuesta] = useState("")
   ```

3. Actualización:

   ```
   function actualizarContador(e) {
       setContador(e.target.value.length);
   }
   ```

   ```
   <textarea
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      // Necesario para cambiar el valor de la variable
      rows={6}
      placeholder="Escribe tu mensaje..."
      onInput={actualizarContador}
      maxLength={300}
      required
   ></textarea>
   ```

### Componentes

Dentro de una pestaña se pueden mostrar otras pestañas localizadas en otra carpeta.

1. Importación:
   - `import dynamic from "next/dynamic";`
   - `const Logica = dynamic(() => import("@/component/Menu/logica"));`
2. Colocación:
   - `<Logica />`

> PD: Los estilos del archivo que lo invoca le afecta, aunque no sé hasta que punto.