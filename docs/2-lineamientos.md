# **Lineamientos Visuales del Sistema**

## **Paleta de colores oficial**

La interfaz utiliza una paleta centrada en tonos azules para transmitir claridad, confianza y consistencia. Cada color tiene un rol funcional específico dentro de la experiencia del usuario.

| Color              | Hex       | Uso principal                                    | Muestra                                                  |
| ------------------ | --------- | ------------------------------------------------ | -------------------------------------------------------- |
| Azul principal     | `#106efc` | Títulos, botones primarios, bordes destacados    | ![#106efc](https://placehold.co/15x15/106efc/106efc.png) |
| Azul claro (hover) | `#3b89ff` | Estados hover en botones e interacciones activas | ![#3b89ff](https://placehold.co/15x15/3b89ff/3b89ff.png) |
| Azul suave (fondo) | `#b6e0f2` | Contenedores de mensajes y bloques informativos  | ![#b6e0f2](https://placehold.co/15x15/b6e0f2/b6e0f2.png) |
| Gris secundario    | `#6c757d` | Texto auxiliar, notas pequeñas y descripciones   | ![#6c757d](https://placehold.co/15x15/6c757d/6c757d.png) |
| Blanco             | `#ffffff` | Fondo general, contraste y elementos neutros     | ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) |

---

## **Tipografía y jerarquía textual**

El sistema utiliza una tipografía moderna y legible para garantizar claridad:

* **Fuente principal:** `"Segoe UI", Inter`
* **Títulos y encabezados (`<h2>`):** azul principal `#106efc`, peso fuerte
* **Texto general:** tamaño base entre `0.9rem` y `1rem`
* **Texto auxiliar:** `0.8rem`, color gris secundario `#6c757d`

Esta jerarquía asegura una lectura clara, orden visual y coherencia en todas las pantallas.

---

## **Estilos generales de interfaz**

### **Botones primarios**

* Fondo en azul principal `#106efc`
* Borde redondeado (5px)
* Texto blanco, peso bold
* Efecto hover en azul claro `#3b89ff`
* Transiciones suaves para interacción

Estos elementos permiten una interacción clara y accesible.

---

### **Contenedores y tarjetas informativas**

* Fondo azul suave `#b6e0f2`
* Borde azul principal
* Padding amplio (15px)
* Bordes redondeados (5px)

Se usan para mensajes, explicaciones y respuestas del chatbot.

---

### **Componentes de entrada**

Los `<textarea>` y campos interactivos incluyen:

* Bordes redondeados
* Enfoque (“focus”) destacado con azul claro
* Fuente consistente con el resto de la interfaz
* Diseño limpio para lectura y escritura fluida

---

## **Estructura y layout**

El sistema emplea distribución mediante **Flexbox**, con:

* Columnas o filas según contexto
* Espaciados uniformes (`gap: 15px`)
* Contenedores fluidos y adaptables
* Secciones con proporción 2:1 para dividir contenido primario y complementario

Esto favorece una navegación sencilla y organizada.

---

## **Comportamientos visuales**

La interfaz incorpora:

* Transiciones en botones y paneles
* Panel lateral desplegable con animación
* Overlay semitransparente para enfoque contextual
* Estados activos consistentes

Estos elementos mejoran la experiencia de usuario sin sobrecargar la interfaz.

---

## **Responsividad**

Existe un tratamiento responsive básico que ajusta:

* Márgenes laterales
* Distribución del contenido
* Comportamiento del panel lateral
* Tamaños del área de respuesta

Adaptado especialmente para pantallas pequeñas (≤ 600px).

---

- [Volver](/README.md)
- [Anterior](/docs/1-Tecnologias.md)
- [Siguiente](/docs/3-Escalable.md)