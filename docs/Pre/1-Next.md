# Uso de Next

---

- [Uso de Next](#uso-de-next)
  - [Estilos](#estilos)
  - [Variables y estados en React](#variables-y-estados-en-react)
  - [Componentes dinámicos y condicionales](#componentes-dinámicos-y-condicionales)

---

## Estilos

En Next.js los estilos pueden aplicarse igual que en HTML, pero la forma recomendada es usar **CSS Modules**, un sistema que permite importar clases CSS directamente en los componentes, asegurando un **aislamiento local** entre estilos (evitando conflictos de nombres).

A continuación se muestra cómo **importar, usar, combinar y condicionar estilos** correctamente dentro del código.

1. **Importación del archivo de estilos**

   ```js
   import style from "@/styles/Menu/menu.module.css";
   import styleMenu from "@/styles/Menu/menu.module.css";
   ```

   > **Cómo se usa:** se importa el archivo `.module.css` con un alias (por convención, `style` o `styles`).  
   > **Por qué:** los CSS Modules encapsulan las clases dentro del archivo, generando nombres únicos a nivel de compilación (por ejemplo, `menu_envio__a1b2c`). Esto evita que los estilos de un componente afecten a otros.  
   > **Nota:** se recomienda usar la ruta absoluta `@/` para mantener ordenadas las importaciones, especialmente en proyectos grandes.

2. **Aplicación de estilos en JSX**
   Las clases importadas se aplican mediante la sintaxis `className={style.nombreDeClase}`:

   ```jsx
   <div className={style.envio}></div>
   ```

   > **Por qué:** en React, `class` no puede usarse directamente (es una palabra reservada de JavaScript), por eso se usa `className`.  
   > Este método permite vincular directamente la clase definida en el archivo CSS al elemento HTML.

3. **Combinación de múltiples clases**
   Puedes aplicar más de una clase simultáneamente concatenándolas con *template literals* (`` ` ``):

   ```jsx
   <div className={`${style.box} ${style.textoInfo}`}></div>
   ```

   > **Por qué:** esto permite reutilizar estilos en conjunto sin crear clases nuevas para cada combinación posible.  
   > También se puede emplear la librería `clsx` o `classnames` para manejar estas combinaciones de forma más limpia, pero no es obligatorio.

4. **Condicionales en las clases**
   Los estilos también pueden activarse o desactivarse según una condición lógica:

   ```jsx
   <div className={`${style.sidePanel} ${style.cajaAzul} ${isOpen ? style.open : ""}`}></div>
   ```

   > **Cómo se usa:** la expresión ternaria `${isOpen ? style.open : ""}` agrega la clase `open` solo si la variable `isOpen` es `true`.  
   > **Por qué:** esto permite crear animaciones o transiciones de apertura/cierre, temas oscuros, o cualquier cambio visual dependiente del estado del componente.

5. **Definición de clases en el archivo CSS**
   Las clases se escriben como en un CSS tradicional, pero cada una será accesible solo para el archivo que la importa:

   ```css
   .envio {
       display: flex;
       flex-direction: column;
       gap: 15px;
   }
   ```

   > **Por qué:** la sintaxis es idéntica a la de CSS estándar, lo que facilita la migración desde proyectos HTML o React antiguos.  
   > Cada clase se exporta automáticamente como una propiedad del objeto `style` importado en el componente.

---

> **En resumen:**
>
> * **Importas** el archivo `.module.css` con `import style from "@/ruta/archivo.module.css"`.
> * **Aplicas** los estilos con `className={style.nombre}`.
> * **Combinas** varias clases con *template literals*.
> * **Condicionas** clases según estados o props.
> * **Aprovechas** el aislamiento de los CSS Modules para evitar conflictos entre componentes.

Este sistema mantiene el código modular, escalable y completamente compatible con la arquitectura de componentes de Next.js.

---

## Variables y estados en React

En React, las variables de estado (`state`) son la base para construir componentes interactivos. Cada valor almacenado en un estado puede afectar directamente el renderizado del componente, y React se encarga de actualizar la interfaz cuando cambian. A continuación se detalla cómo configurar, usar y ampliar esta estructura paso a paso.

1. **Importación de hooks y recursos necesarios**
   Antes de manejar estados o efectos, deben importarse los hooks fundamentales desde React. Además, se pueden importar archivos o datos externos (como una lista de saludos).

   ```js
   import { useState, useEffect } from "react";
   import { saludos } from "./saludos";
   ```

   > **Por qué:** `useState` permite crear y actualizar valores reactivos dentro de un componente funcional, mientras que `useEffect` se usa para ejecutar lógica después de un renderizado (como cargar datos, inicializar valores o ejecutar efectos secundarios).

2. **Declaración de estados internos**
   Los estados se declaran dentro del cuerpo del componente, y cada uno gestiona una parte específica de la lógica.

   ```js
   const [contador, setContador] = useState(0);
   const [userInput, setUserInput] = useState("");
   const [enviando, setEnviando] = useState(false);
   const [respuesta, setRespuesta] = useState("");
   const [moduloReco, setModuloReco] = useState([true, true, true, true, true]);
   ```

   > **Cómo y por qué:** cada par `[valor, setValor]` define una variable y una función que actualiza su contenido.  
   > Por ejemplo, `setUserInput` cambia el texto que el usuario escribe, y `setModuloReco` gestiona qué módulos se muestran u ocultan. Cuando se actualiza un estado, React re-renderiza el componente automáticamente.

3. **Inicialización automática con `useEffect`**
   Para ejecutar una acción al iniciar el componente (como mostrar un saludo aleatorio), se utiliza `useEffect` con un arreglo vacío `[]`.

   ```js
   useEffect(() => {
       const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
       setRespuesta(saludoAleatorio);
   }, []);
   ```

   > **Por qué:** el arreglo vacío garantiza que el código solo se ejecute una vez, simulando un “ciclo de vida” al montar el componente.

4. **Definición de datos externos reutilizables**
   Las listas o constantes, como los saludos, se exportan desde un archivo aparte para mantener el código limpio y reutilizable:

   ```js
   export const saludos = [
       "Hola, soy Carmen-AI. Estoy aquí para acompañarte.",
       "Hola. ¿En qué puedo ayudarte hoy?",
       "Bienvenida. Puedes contar conmigo.",
       ...
   ];
   ```

   > **Por qué:** mantener los datos en archivos externos permite importarlos en otros componentes y facilita su mantenimiento.

5. **Manejo de entradas del usuario**
   Las funciones que responden a eventos del usuario se vinculan directamente a los elementos del JSX.

   ```js
   function actualizarContador(e) {
       setContador(e.target.value.length);
   }
   ```

   > **Cómo se usa:** esta función se pasa al evento `onInput` o `onChange` de un `<textarea>` para actualizar el número de caracteres en tiempo real.

6. **Campo de texto controlado y contador sincronizado**
   Un campo controlado se enlaza al estado para mantener sincronizado su valor con la lógica interna del componente:

   ```jsx
   <textarea
       value={userInput}
       onChange={(e) => setUserInput(e.target.value)}
       onInput={actualizarContador}
       rows={6}
       placeholder="Escribe tu mensaje..."
       maxLength={300}
       required
   ></textarea>

   <small>{contador}/300</small>
   ```

   > **Por qué:** React gestiona el valor del campo, evitando inconsistencias entre el DOM y el estado. Además, el contador refleja visualmente la cantidad de caracteres permitidos.

7. **Botón con estado de envío controlado**
   El botón usa el estado `enviando` para modificar su comportamiento según el proceso activo:

   ```jsx
   <button
       className={style.btnPrimario}
       type="submit"
       disabled={enviando}
   >
       {enviando ? "Procesando..." : "Enviar"}
   </button>
   ```

   > **Por qué:** deshabilitar el botón durante la acción evita envíos múltiples y proporciona una retroalimentación visual inmediata al usuario.

8. **Procesamiento condicional del contenido**
   Se puede analizar el contenido de `respuesta` para decidir qué módulos deben mostrarse u ocultarse.

   ```js
   function verificarMensaje(respuesta) {
       const r = respuesta.toLowerCase();
       actuReco(0, !r.includes("### autoayudag2"));
       actuReco(1, !r.includes("### autoayudag5"));
       actuReco(2, !(r.includes("### nutrición") || r.includes("### nutricion")));
       actuReco(3, !r.includes("### coach laboral"));
       actuReco(4, !r.includes("### crianza"));
   }
   ```

   > **Cómo y por qué:** esta función puede llamarse después de recibir una respuesta del servidor o del usuario. Detecta patrones (`### palabraClave`) para actualizar el estado de los módulos, activando solo los necesarios.

9. **Actualización de estado mediante posiciones de arreglo**
   Para modificar un valor dentro de un estado basado en arreglo, se crea una copia y se actualiza solo la posición deseada:

   ```js
   function actuReco(position, valor) {
       setModuloReco(prev => {
           const nuevo = [...prev];
           nuevo[position] = valor;
           return nuevo;
       });
   }
   ```

   > **Por qué:** React requiere que los estados sean inmutables; crear una copia garantiza que el sistema detecte el cambio y vuelva a renderizar correctamente.

---

> **En resumen:**
>
> * Se **importan** los hooks (`useState`, `useEffect`) para controlar datos y efectos.
> * Se **declaran** estados que gobiernan valores interactivos (texto, contador, módulos).
> * Se **usan funciones** para responder a eventos y modificar los estados.
> * Se **vinculan** esos estados al JSX para mantener la interfaz sincronizada.
> * Y se **controla** la lógica del renderizado mediante condiciones y actualizaciones inmutables.

Este patrón de trabajo es la base de cualquier componente React moderno: **mantener la UI y el estado en sincronía** sin manipular el DOM directamente.

---

## Componentes dinámicos y condicionales

Esta sección muestra cómo **importar, utilizar y comunicar componentes** dentro de React y Next.js, controlando su visibilidad mediante props y estados. La idea es mantener una estructura clara y reutilizable, donde cada componente reciba solo la información necesaria para renderizar su parte de la interfaz.

1. **Importación de los componentes**
   Para usar un componente externo en otro archivo, primero se importa. En Next.js se puede hacer directamente o con carga dinámica:

   ```js
   import Recomendaciones from "@/component/Menu/Recomendaciones";
   import Toggle from "@/component/Menu/Toggle";
   ```

   Si se prefiere mejorar el rendimiento cargando solo cuando se necesite:

   ```js
   import dynamic from "next/dynamic";
   const Recomendaciones = dynamic(() => import("@/component/Menu/Recomendaciones"));
   const Toggle = dynamic(() => import("@/component/Menu/Toggle"));
   ```

   > **Por qué:** la carga dinámica evita que componentes secundarios se procesen si aún no se usan, reduciendo el tiempo inicial de carga.

2. **Uso dentro del componente principal**
   Una vez importados, los componentes se colocan dentro del JSX principal. Aquí se les pueden pasar estados o valores como props para controlar su comportamiento:

   ```jsx
   <Recomendaciones mostrarModulo={moduloReco} />
   <Toggle ocultarModulo={"menu"} />
   ```

   > **Por qué:** las props (`mostrarModulo`, `ocultarModulo`) permiten que los componentes hijos reaccionen a los cambios del padre sin necesidad de volver a declararlos o duplicar lógica.

3. **Definición de `Recomendaciones`**
   Este componente recibe un arreglo (`mostrarModulo`) desde el padre. Cada posición controla si se debe ocultar o mostrar una sección específica.

   ```jsx
   export default function Recomendaciones({ mostrarModulo }) {
       return (
           <div hidden={mostrarModulo[0]}>
               <a href="/autoayudaG2">
                   <Image
                       src="/Menu/motivacion.png"
                       alt="Módulo de Autoayuda"
                       width={180}
                       height={180}
                   />
                   <p>Quiero ser mejor</p>
               </a>
           </div>
       );
   }
   ```

   > **Por qué:** usar `hidden={mostrarModulo[0]}` conecta directamente la visibilidad con el estado. Si el valor cambia en el componente padre, este componente se re-renderiza automáticamente con el nuevo resultado.

4. **Definición de `Toggle`**
   Este componente también recibe una prop (`ocultarModulo`) para decidir si su contenido debe mostrarse o no.

   ```jsx
   export default function Toggle({ ocultarModulo }) {
       return (
           <div hidden={ocultarModulo === "menu"}>
               <a href="/">
                   <Image
                       src="/Menu/logo.png"
                       alt="chatbot Carmen-AI"
                       width={130}
                       height={60}
                   />
                   <p>Te acompaño a crecer</p>
               </a>
           </div>
       );
   }
   ```

   > **Por qué:** esto permite controlar el renderizado desde el padre sin necesidad de desmontar el componente, lo que mantiene el DOM limpio y mejora el rendimiento.

5. **Comunicación entre componentes**
   Las props (`mostrarModulo`, `ocultarModulo`) provienen de estados definidos en el componente principal, por ejemplo:

   ```js
   const [moduloReco, setModuloReco] = useState([true, true, true, true, true]);
   ```

   Cuando este estado cambia con una función como `actuReco()`, React vuelve a renderizar `Recomendaciones`, actualizando qué elementos están visibles.

   ```js
   function actuReco(position, valor) {
       setModuloReco(prev => {
           const nuevo = [...prev];
           nuevo[position] = valor;
           return nuevo;
       });
   }
   ```

   > **Por qué:** React vuelve a renderizar automáticamente los componentes que usan estados o props actualizados, sin manipular directamente el DOM, garantizando eficiencia y coherencia visual.

6. **Resumen técnico**

   * **Importas** el componente con `import` o `dynamic` para usarlo donde lo necesites.
   * **Lo utilizas** dentro del JSX pasando los datos requeridos mediante props.
   * **Controlas su visibilidad** con estados y condiciones (`hidden`, ternarios, etc.).
   * **React se encarga** de actualizarlo automáticamente cuando los valores cambian.

> **En síntesis:** este patrón de comunicación por props y renderizado condicional permite mantener los componentes independientes, reutilizables y sincronizados con los estados del padre, sin necesidad de manipular el DOM manualmente.

---

- [Volver](/README.md)
- [Anterior](/docs/Pre/0-Despliegue.md)
- [Siguiente](/docs/Pre/2-CSS.md)