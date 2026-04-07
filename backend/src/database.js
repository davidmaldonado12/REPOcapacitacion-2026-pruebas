import mysql from 'mysql2/promise';

let pool;

function getSslConfig() {
  const useSsl = process.env.MYSQL_SSL === 'true';
  if (!useSsl) return undefined;

  const rejectUnauthorized = process.env.MYSQL_SSL_REJECT_UNAUTHORIZED !== 'false';
  return { rejectUnauthorized };
}

function getConnectionConfig() {
  if (process.env.MYSQL_URL) {
    return {
      uri: process.env.MYSQL_URL,
      waitForConnections: true,
      connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT || 10),
      queueLimit: 0,
      ssl: getSslConfig(),
    };
  }

  return {
    host: process.env.MYSQLHOST || process.env.MYSQL_HOST || '127.0.0.1',
    port: Number(process.env.MYSQLPORT || process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQLUSER || process.env.MYSQL_USER || 'root',
    password: process.env.MYSQLPASSWORD || process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQLDATABASE || process.env.MYSQL_DATABASE || 'railway',
    waitForConnections: true,
    connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT || 10),
    queueLimit: 0,
    ssl: getSslConfig(),
  };
}

export function getDatabase() {
  if (!pool) {
    const config = getConnectionConfig();
    pool = config.uri
      ? mysql.createPool(config.uri, {
          waitForConnections: config.waitForConnections,
          connectionLimit: config.connectionLimit,
          queueLimit: config.queueLimit,
          ssl: config.ssl,
        })
      : mysql.createPool(config);
  }

  return pool;
}

export async function initializeDatabase() {
  const db = getDatabase();

  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS scores (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      score INT NOT NULL DEFAULT 0,
      total INT NOT NULL,
      completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_scores_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
    )
  `);

  console.log('Base de datos MySQL inicializada.');
}

export async function createUser({ name, email }) {
  const db = getDatabase();
  const [result] = await db.execute(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
  );

  return result.insertId;
}

export async function saveScore({ userId, score, total }) {
  const db = getDatabase();
  const [result] = await db.execute(
    'INSERT INTO scores (user_id, score, total) VALUES (?, ?, ?)',
    [userId, score, total],
  );

  return result.insertId;
}

export async function getLeaderboard(limit = 50) {
  const db = getDatabase();
  const parsedLimit = Number(limit);
  const safeLimit = Number.isNaN(parsedLimit) ? 50 : parsedLimit;

  const [rows] = await db.query(
    `
      SELECT
        u.name,
        MAX(s.score) AS best_score,
        MAX(s.total) AS total,
        MAX(s.completed_at) AS last_attempt
      FROM scores s
      JOIN users u ON u.id = s.user_id
      GROUP BY s.user_id, u.name
      ORDER BY best_score DESC, last_attempt ASC
      LIMIT ${db.escape(safeLimit)}
    `
  );

  return rows;
}

export async function getScoreById(scoreId) {
  const db = getDatabase();
  const [rows] = await db.execute(
    `
      SELECT s.score, s.total, s.completed_at, u.name, u.email
      FROM scores s
      JOIN users u ON u.id = s.user_id
      WHERE s.id = ?
      LIMIT 1
    `,
    [scoreId],
  );

  return rows[0] ?? null;
}
