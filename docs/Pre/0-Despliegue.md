# Requisitos previos

## 1️⃣ Preparar entorno

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

## 2️⃣ Configuración de Prisma

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

## 3️⃣ Ejecutar proyecto Next.js

1. **Levantar servidor de desarrollo**:

   ```bash
   npm run dev
   ```
2. Abre en navegador: [http://localhost:3000](http://localhost:3000)

---

- [Volver](/README.md)
- [Siguiente](/docs/Pre/1-Next.md)