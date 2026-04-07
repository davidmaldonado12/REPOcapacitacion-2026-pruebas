# Capacitacion 2026 - Pruebas

Entorno de desarrollo full-stack con React + Vite (frontend), Node.js + Express (backend) y MySQL. En despliegue conjunto, Express sirve el frontend compilado.

## Estructura del proyecto

```text
project-root/
|-- frontend/          # React + Vite
|   |-- src/
|   |-- index.html
|   |-- vite.config.js
|   `-- package.json
|-- backend/           # Node.js + Express
|   |-- src/
|   |   |-- index.js       # Entry point del servidor
|   |   `-- database.js    # Conexion e inicializacion de MySQL
|   `-- package.json
`-- README.md
```

## Como levantar el entorno

### Desde la raiz

```bash
npm install
npm run dev:backend
npm run dev:frontend
```

Para despliegue en Railway como un solo servicio:

```bash
npm install
npm run build
npm start
```

### Backend

```bash
cd backend
npm install
npm run dev
```

El servidor estara disponible en `http://localhost:3001`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`.

## Proxy de desarrollo

El frontend usa un proxy de Vite para redirigir `/api/...` hacia el backend local. Si necesitas otro destino en desarrollo, define `VITE_DEV_API_PROXY_TARGET`.

## Despliegue en Railway

| Aspecto | Configuracion |
|---|---|
| **Puerto** | `process.env.PORT` |
| **Base de datos** | `MYSQL_URL` o `MYSQLHOST` + `MYSQLPORT` + `MYSQLUSER` + `MYSQLPASSWORD` + `MYSQLDATABASE` |
| **CORS** | `CORS_ORIGIN` solo si frontend y backend van en dominios distintos |
| **Build command** | `npm run build` |
| **Start command** | `npm start` |
| **Root directory** | Raiz del repositorio |

## Notas

- `backend/src/database.js` centraliza la conexion a MySQL y crea las tablas `users` y `scores` si no existen.
- En despliegue conjunto, `backend/src/index.js` sirve `frontend/dist` y mantiene los endpoints `/api/...`.
- El frontend consume la API mediante `VITE_API_URL` si se despliega separado, y con ruta relativa cuando va junto al backend.
- Usa `backend/.env.example` y `frontend/.env.example` como referencia para Railway.
