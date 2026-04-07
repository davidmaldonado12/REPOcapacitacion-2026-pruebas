# Capacitación 2026 - Pruebas

Entorno de desarrollo full-stack con React + Vite (frontend), Node.js + Express (backend) y SQLite (base de datos local).

## Estructura del Proyecto

```
project-root/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/           # Node.js + Express
│   ├── src/
│   │   ├── index.js       # Entry point del servidor
│   │   └── database.js    # Módulo central de base de datos
│   ├── data/
│   │   └── database.db    # Archivo SQLite local (auto-generado)
│   └── package.json
└── README.md
```

## Cómo Levantar el Entorno

### Backend

```bash
cd backend
npm install
npm run dev
```

El servidor estará disponible en `http://localhost:3001`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Proxy de Desarrollo

El frontend está configurado con un proxy hacia el backend. Cualquier petición a `/api/...` desde el frontend se redirige automáticamente a `http://localhost:3001/api/...`, evitando problemas de CORS en desarrollo.

## Despliegue en Railway

| Aspecto | Configuración |
|---|---|
| **Puerto** | `process.env.PORT` (Railway lo inyecta automáticamente) |
| **DB Path** | Externalizar con `process.env.DB_PATH` para volumen persistente |
| **Frontend build** | `npm run build` → servir desde Express o como servicio separado |
| **Variables de entorno** | Definir en Railway Dashboard; replicar en `.env` local |
| **Start script** | `npm start` → arranca el servidor |

## Notas

- El archivo `database.db` **no se commitea** (está en `.gitignore`).
- `database.js` es el módulo central para toda interacción con la base de datos.
- Para migrar de SQLite a PostgreSQL, solo se modifica `database.js`.
