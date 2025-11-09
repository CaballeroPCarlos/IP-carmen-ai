# **Estándar de Accesibilidad (WCAG 2.1 AA)**

La aplicación implementa prácticas alineadas con WCAG 2.1 AA, integrando atributos ARIA, control de foco y estructura semántica para garantizar accesibilidad mediante teclado y lectores de pantalla. El menú lateral utiliza `aria-expanded`, `aria-controls` y `aria-label` para informar su estado al usuario, mientras que el foco se redirige al panel únicamente cuando este se encuentra abierto, evitando desplazamientos inesperados. Para mantener un árbol accesible limpio, los módulos no visibles emplean el atributo `hidden`, y el contenido del panel se agrupa con `role="navigation"` y encabezados correctamente asociados. En el módulo de interacción (*Logica*), la zona de respuesta se define como `role="region"` y posee `tabIndex="0"` para permitir navegación y lectura inmediata tras el envío del mensaje. Las imágenes cuentan con textos alternativos descriptivos y los elementos interactivos utilizan etiquetas ARIA que precisan la función y destino de cada enlace.

Para verificar su funcionamiento en Windows, se recomienda utilizar el lector de pantalla integrado **Narrator**, que puede activarse con **Windows + Ctrl + Enter** y desactivarse repitiendo la misma combinación. Una vez activo, la navegación se prueba con **Tab** y **Shift + Tab** para recorrer la interfaz, y con **Enter** para activar botones. Al llegar al botón del menú lateral, Narrator debe anunciar el texto del `aria-label` y el valor de `aria-expanded`; al abrir el panel, el foco debe trasladarse a su interior y permitir recorrer los módulos disponibles. En el módulo de respuesta, tras enviar un mensaje, el lector debe anunciar el contenido generado dentro de la región, respetando el orden lógico. Estas pruebas garantizan que la aplicación sea operable mediante teclado, comprensible para tecnologías asistivas y consistente con los criterios de accesibilidad establecidos.

---

- [Volver](/README.md)
- [Anterior](/docs/3-Escalable.md)
- [Siguiente](/docs/)