## Integración segura bajo estándares de protección de datos

Carmen-AI garantiza que toda la comunicación, manejo de claves y procesamiento de información sensible se realiza de manera segura, cumpliendo con estándares de protección de datos.

### Principios

* Solo se procesan los datos estrictamente necesarios (`mensaje`), evitando exposición de información sensible.
* Se mantiene la confidencialidad de las llaves de API mediante variables de entorno seguras.
* Todas las comunicaciones con servicios externos usan HTTPS y autenticación segura (`Authorization: Bearer <key>`).

### Manejo de Integraciones

* Los endpoints serverless (`pages/api`) aceptan únicamente el campo `mensaje`.
* Se implementa validación estricta: texto no vacío, máximo 300 caracteres, sin campos extra.
* Se utiliza un mecanismo de **fallback** para probar varias llaves de API hasta obtener respuesta válida.
* El sistema maneja errores con códigos HTTP claros (400 para solicitudes inválidas).
* Si todas las llaves fallan, el endpoint devuelve **HTTP 500** indicando error interno, pero incluye un **mensaje de fallback (`reply: "Sin respuesta."`)**, asegurando que el cliente reciba siempre una respuesta manejable.

### Comprobación de seguridad

* Se utiliza un **script en Python** para probar el endpoint con distintos casos:

```python
import requests
import time
import sys
sys.stdout.reconfigure(encoding='utf-8')

url = "http://localhost:3000/api/Menu/envio"

casos = [
    {"nombre": "Mensaje válido", "data": {"mensaje": "Hola, ¿cómo estás?"}},
    {"nombre": "Sin mensaje", "data": {}},
    {"nombre": "Mensaje vacío", "data": {"mensaje": ""}},
    {"nombre": "Mensaje demasiado largo", "data": {"mensaje": "x" * 400}},
    {"nombre": "Campo extra", "data": {"mensaje": "Hola", "otro": "no permitido"}}
]

for caso in casos:
    print(f"--- Probando: {caso['nombre']} ---")
    try:
        response = requests.post(url, json=caso["data"])
        print("Código HTTP:", response.status_code)
        try:
            print("Respuesta JSON:", response.json())
        except Exception as e:
            print("Error al parsear JSON:", e)
    except Exception as e:
        print("Error en la solicitud:", e)

    print("Esperando 10 segundos antes del siguiente caso...\n")
    time.sleep(10)
```

* Además, en el **frontend** la función `EnviarMensaje` detecta si la respuesta JSON contiene un campo `error` y lo imprime en la consola o en un log seguro:

```javascript
if (data.error) {
    console.warn("Error detectado en la respuesta:", data.error);
}
```

* Los resultados confirman que:

  * Solo se aceptan datos permitidos y validados.
  * La comunicación con la API externa se realiza de forma segura.
  * El sistema maneja errores correctamente y protege las llaves.
  * Incluso cuando todas las llaves fallan, el cliente recibe un mensaje de fallback y los errores quedan registrados para monitoreo seguro.

### Notas importantes

* Carmen-AI **no expone las llaves de API ni datos internos del usuario**; toda la interacción sigue estándares de seguridad.
* La integración asegura confiabilidad y protección de la información en todas las comunicaciones y procesos.

---

* [Volver](/README.md)
* [Anterior](/docs/6-etica.md)
