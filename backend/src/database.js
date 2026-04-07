import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta al archivo .db — compatible con Railway (usa variable de entorno si existe)
const DB_PATH = process.env.DB_PATH || path.join(__dirname, '../data/database.db');

let db;

export function getDatabase() {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL'); // Mejor performance en concurrencia
  }
  return db;
}

export function initializeDatabase() {
  const db = getDatabase();

  // Tabla de usuarios (intento de quiz)
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      name       TEXT    NOT NULL,
      email      TEXT    NOT NULL,
      created_at DATETIME DEFAULT (datetime('now'))
    );
  `);

  // Tabla de puntajes
  db.exec(`
    CREATE TABLE IF NOT EXISTS scores (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id       INTEGER NOT NULL REFERENCES users(id),
      score         INTEGER NOT NULL DEFAULT 0,
      total         INTEGER NOT NULL,
      completed_at  DATETIME DEFAULT (datetime('now'))
    );
  `);

  console.log('Base de datos inicializada en:', DB_PATH);
}

// --- USERS ---

export function createUser({ name, email }) {
  const db = getDatabase();
  const stmt = db.prepare(`INSERT INTO users (name, email) VALUES (?, ?)`);
  const result = stmt.run(name, email);
  return result.lastInsertRowid;  // Retorna el id del usuario creado
}

// --- SCORES ---

export function saveScore({ userId, score, total }) {
  const db = getDatabase();
  const stmt = db.prepare(`
    INSERT INTO scores (user_id, score, total) VALUES (?, ?, ?)
  `);
  const result = stmt.run(userId, score, total);
  return result.lastInsertRowid;
}

// Leaderboard: mejor puntaje por usuario, ordenado de mayor a menor
export function getLeaderboard(limit = 50) {
  const db = getDatabase();
  return db.prepare(`
    SELECT
      u.name,
      MAX(s.score)              AS best_score,
      s.total,
      MAX(s.completed_at)       AS last_attempt
    FROM scores s
    JOIN users u ON u.id = s.user_id
    GROUP BY s.user_id
    ORDER BY best_score DESC, last_attempt ASC
    LIMIT ?
  `).all(limit);
}

// Puntaje de un intento específico (para la pantalla de resultado inmediato)
export function getScoreById(scoreId) {
  const db = getDatabase();
  return db.prepare(`
    SELECT s.score, s.total, s.completed_at, u.name, u.email
    FROM scores s
    JOIN users u ON u.id = s.user_id
    WHERE s.id = ?
  `).get(scoreId);
}
