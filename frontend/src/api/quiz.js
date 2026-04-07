const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
const BASE_URL = `${API_BASE}/api/quiz`;

/**
 * Registra al usuario. Llama antes de iniciar el quiz.
 * @returns {Promise<{ userId: number }>}
 */
export async function registerUser({ name, email }) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  });
  if (!res.ok) throw new Error('Error al registrar usuario');
  return res.json();
}

/**
 * Envía el puntaje final al terminar el quiz.
 * @returns {Promise<{ scoreId: number, rank: number }>}
 */
export async function submitScore({ userId, score, total }) {
  const res = await fetch(`${BASE_URL}/score`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, score, total }),
  });
  if (!res.ok) throw new Error('Error al guardar puntaje');
  return res.json();
}

/**
 * Obtiene el ranking global.
 * @returns {Promise<{ leaderboard: Array }>}
 */
export async function fetchLeaderboard() {
  const res = await fetch(`${BASE_URL}/leaderboard`);
  if (!res.ok) throw new Error('Error al obtener leaderboard');
  return res.json();
}
