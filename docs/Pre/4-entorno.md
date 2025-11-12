# 📘 Guía de Configuración: Variables de Entorno y Despliegue en Vercel

Este documento explica cómo gestionar las variables de entorno necesarias para ejecutar el proyecto tanto en **entorno local** como en **Vercel**, además de los pasos para importar correctamente el repositorio desde **GitHub**.

---

## ⚙️ 1. Variables de Entorno

Las variables de entorno son valores sensibles o configuraciones que no deben exponerse directamente en el código fuente. Este proyecto utiliza las siguientes:

```env
OPENROUTER_KEY_1=sk-or-v1-***
OPENROUTER_KEY_2=sk-or-v1-***
OPENROUTER_KEY_3=sk-or-v1-***
OPENROUTER_KEY_4=vacio
OPENROUTER_KEY_5=vacio

ModeloIA=tngtech/deepseek-r1t2-chimera:free

DATABASE_URL=postgresql://********:********@ep-rapid-grass-a4scc17p-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
```

---

## 💻 2. Configuración en Entorno Local

1. Crea un archivo llamado **`.env`** en la raíz del proyecto (al mismo nivel que `package.json`).
2. Copia y pega las variables anteriores dentro del archivo `.env`.
3. Asegúrate de **no subir este archivo a GitHub**. Debe estar incluido en tu `.gitignore`.
4. Al ejecutar el proyecto con `npm run dev` o `yarn dev`, Next.js leerá automáticamente las variables desde `.env`.

> 🔒 **Nota:** nunca compartas tu archivo `.env` ni las claves que contiene.

---

## ☁️ 3. Configuración en Vercel

1. Accede al panel de tu proyecto en [Vercel](https://vercel.com/).
2. Ve a la pestaña **Settings → Environment Variables**.
3. Agrega una por una las variables con sus respectivos valores (sin comillas ni espacios adicionales).
4. Guarda los cambios.
5. Vercel aplicará automáticamente las variables en los entornos de:

   * **Production**
   * **Preview**
   * **Development** (según configuración del entorno)

> 💡 Si actualizas las variables, deberás **volver a desplegar el proyecto** para aplicar los cambios.

---

## 🔗 4. Importar un Repositorio desde GitHub a Vercel

1. Inicia sesión en [Vercel](https://vercel.com/).
2. Haz clic en **"Add New Project"**.
3. Selecciona **"Import Git Repository"**.
4. Autoriza a Vercel a acceder a tu cuenta de **GitHub** (solo la primera vez).
5. Busca tu repositorio y haz clic en **"Import"**.
6. Vercel detectará automáticamente el framework (por ejemplo, **Next.js**) y sugerirá una configuración base.
7. Añade las **variables de entorno** indicadas anteriormente antes de desplegar.
8. Presiona **Deploy**.

Una vez completado, Vercel construirá y desplegará automáticamente el proyecto desde tu repositorio.

---

## ✅ 5. Verificación

Para confirmar que las variables funcionan correctamente:

* Ejecuta el proyecto en local y verifica la conexión a la base de datos o el uso de las claves de OpenRouter.
* En Vercel, revisa los logs del deployment en la sección **"Deployments" → "View Function Logs"**.

---

- [Volver](/README.md)
- [Anterior](/docs/Pre/3-Prisma.md)