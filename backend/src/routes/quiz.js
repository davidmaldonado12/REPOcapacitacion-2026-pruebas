import { Router } from 'express';
import { createUser, saveScore, getLeaderboard, getScoreById } from '../database.js';

const router = Router();

/**
 * POST /api/quiz/register
 * Registra al usuario antes de comenzar el quiz.
 * Body: { name: string, email: string }
 * Response: { userId: number }
 */
router.post('/register', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'name y email son requeridos.' });
  }

  try {
    const userId = createUser({ name, email });
    res.status(201).json({ userId });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar usuario.', detail: err.message });
  }
});

/**
 * POST /api/quiz/score
 * Guarda el puntaje al finalizar el quiz.
 * Body: { userId: number, score: number, total: number }
 * Response: { scoreId: number, rank: number }
 */
router.post('/score', (req, res) => {
  const { userId, score, total } = req.body;

  if (userId == null || score == null || total == null) {
    return res.status(400).json({ error: 'userId, score y total son requeridos.' });
  }

  try {
    const scoreId = saveScore({ userId, score, total });

    // Calcular posición en el leaderboard al momento del guardado
    const leaderboard = getLeaderboard(1000);
    const rank = leaderboard.findIndex(e => e.name && e.best_score === score) + 1;

    res.status(201).json({ scoreId, rank });
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar puntaje.', detail: err.message });
  }
});

/**
 * GET /api/quiz/leaderboard
 * Retorna el ranking global (máximo 50 entradas).
 * Response: { leaderboard: Array<{ name, best_score, total, last_attempt }> }
 */
router.get('/leaderboard', (req, res) => {
  try {
    const leaderboard = getLeaderboard(50);
    res.json({ leaderboard });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener leaderboard.', detail: err.message });
  }
});

/**
 * GET /api/quiz/score/:scoreId
 * Retorna el detalle de un intento específico.
 * Response: { score, total, name, completed_at }
 */
router.get('/score/:scoreId', (req, res) => {
  const { scoreId } = req.params;

  try {
    const data = getScoreById(Number(scoreId));
    if (!data) return res.status(404).json({ error: 'Puntaje no encontrado.' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener puntaje.', detail: err.message });
  }
});

export default router;
