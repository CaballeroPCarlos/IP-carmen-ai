# **Estándar de Accesibilidad (WCAG 2.1 AA)**

La aplicación sigue las prácticas recomendadas por **WCAG 2.1 AA**, incorporando atributos ARIA, control de foco y estructura semántica para garantizar accesibilidad mediante teclado y lectores de pantalla.

### **Menú lateral**

* Se implementan los atributos `aria-expanded`, `aria-controls` y `aria-label` para informar al usuario sobre el estado del menú.
* El foco se desplaza al panel únicamente cuando está abierto, evitando saltos inesperados.
* Los módulos no visibles se ocultan mediante el atributo `hidden`, manteniendo un árbol DOM limpio y accesible.
* El panel se agrupa con `role="navigation"` y encabezados correctamente asociados para mejorar la navegación y comprensión de los contenidos.

### **Módulo de interacción (Lógica)**

* La zona de respuestas se define como `role="region"` y cuenta con `tabIndex="0"`, permitiendo navegación y lectura inmediata tras el envío de un mensaje.
* Se asegura que el orden del tabulado sea lógico, garantizando que los usuarios puedan recorrer la interfaz de manera coherente.

### **Elementos visuales y enlaces**

* Todas las imágenes incluyen textos alternativos descriptivos (`alt`).
* Los elementos interactivos utilizan etiquetas ARIA que indican su función y destino, facilitando la comprensión para lectores de pantalla.

### **Verificación en Windows**

Para comprobar el correcto funcionamiento:

1. Activar el lector de pantalla **Narrator** con **Windows + Ctrl + Enter**.
2. Navegar por la interfaz utilizando **Tab** y **Shift + Tab** para moverse entre elementos, y **Enter** para activar botones.
3. Al llegar al botón del menú lateral, el lector debe anunciar el `aria-label` y el valor de `aria-expanded`.
4. Al abrir el panel, el foco debe trasladarse a su interior y permitir recorrer los módulos disponibles.
5. En el módulo de interacción, tras enviar un mensaje, el lector debe anunciar el contenido generado dentro de la región, respetando el orden lógico de lectura.

Estas pruebas garantizan que la aplicación sea **operable mediante teclado**, **comprensible para tecnologías asistivas** y consistente con los criterios de accesibilidad establecidos.

---

- [Volver](/README.md)
- [Anterior](/docs/3-Escalable.md)
- [Siguiente](/docs/5-Diagramas.md)