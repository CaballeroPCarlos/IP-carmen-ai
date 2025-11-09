## Características del CSS

* `color: #106efc;`: Se utiliza como color principal para títulos, bordes y botones, reforzando coherencia visual y jerarquía cromática.
* `background-color: #b6e0f2;`: Define un tono celeste suave para áreas informativas, generando contraste sin saturar la vista.
* `border-radius: 5px;`: Suaviza los bordes de tarjetas, botones y contenedores, aportando un aspecto más amigable y moderno.
* `padding: 8px 13px;` o `15px;`: Mantiene una separación interna uniforme, garantizando legibilidad y comodidad al interactuar con botones o textos.
* `font-size: 0.8rem;` y `0.9rem;`: Escala el texto para adaptarlo al contexto (informativo o principal), manteniendo armonía visual.
* `transition: background-color 0.3s, border 0.3s;`: Añade animaciones suaves al pasar el cursor sobre botones, mejorando la experiencia de usuario.
* `cursor: pointer;`: Refuerza la sensación de interactividad en los elementos clicables.

### Estructura y distribución

* `display: flex;`: Es la base de toda la maquetación, permitiendo que los contenedores organicen su contenido de forma dinámica y adaptable.
* `flex-direction: column;`: Se aplica en formularios, paneles y secciones verticales para facilitar la lectura y el flujo natural del contenido.
* `flex-direction: row;` con `flex-wrap: wrap;`: Permite que los elementos se distribuyan en línea y pasen a una nueva fila si no hay espacio suficiente, manteniendo la responsividad.
* `gap: 15px;` o `30px;`: Genera una separación equilibrada entre componentes, mejorando la claridad visual sin necesidad de márgenes manuales.
* `flex: 2 1 0;` y `flex: 1 1 0;`: Controlan la proporción 2:1 entre las dos columnas principales, optimizando el uso del espacio en pantallas grandes.
* `box-sizing: border-box;`: Garantiza que el tamaño total de los elementos incluya padding y bordes, evitando desajustes de ancho.

### Componentes interactivos

* `resize: none;`: Evita que el usuario altere el tamaño del área de texto, preservando la estructura visual del formulario.
* `white-space: pre-wrap;`: Conserva los saltos de línea en las respuestas generadas, asegurando una lectura fiel al formato original.
* `position: absolute;` junto con `bottom` y `right;`: Ubica elementos secundarios (como el contador) dentro del área del texto sin afectar su flujo.
* `overflow-y: auto;`: Permite desplazarse dentro del panel lateral cuando el contenido supera la altura disponible.
* `transform: translateX()` y `transition: transform 0.3s ease;`: Proveen un efecto de desplazamiento fluido al abrir o cerrar el panel lateral.

### Adaptabilidad

* `@media (max-width: 600px)`: Reduce el padding y ajusta los márgenes para mantener la proporción en pantallas pequeñas.
* `max-width` y `min-width`: Delimitan el tamaño de los bloques de respuesta para que el texto no se disperse ni se comprima excesivamente.

---

- [Volver](/README.md)
- [Anterior](/docs/Pre/1-Next.md)
- [Siguiente](/docs/Pre/3-Prisma.md)