import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { questions } from '../data/questions';

const QuizContext = createContext();

const initialState = {
  user: {
    name: '',
    email: '',
    userId: null,
  },
  quiz: {
    currentQuestion: 1,
    totalQuestions: 10,
    answers: [],
    score: 0,
    scoreId: null,
    rank: null,
    isFinished: false,
  },
  ui: {
    showFeedback: false,
    feedbackData: null,
  }
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case 'SET_USER_ID':
      return {
        ...state,
        user: { ...state.user, userId: action.payload },
      };
    case 'SET_RESULT':
      return {
        ...state,
        quiz: { ...state.quiz, ...action.payload },
      };
    case 'ANSWER_QUESTION':
      const { isCorrect, explanation, selectedOption, questionId } = action.payload;
      // Check if already answered to avoid double score
      const alreadyAnswered = state.quiz.answers.find(a => a.questionId === questionId);
      if (alreadyAnswered) return state;

      return {
        ...state,
        quiz: {
          ...state.quiz,
          answers: [
            ...state.quiz.answers,
            { questionId, selectedOption, isCorrect },
          ],
          score: isCorrect ? state.quiz.score + 1 : state.quiz.score,
        },
        ui: {
          showFeedback: true,
          feedbackData: { isCorrect, explanation },
        },
      };
    case 'NEXT_QUESTION':
      const nextQuestion = state.quiz.currentQuestion + 1;
      const isFinished = nextQuestion > state.quiz.totalQuestions;
      return {
        ...state,
        quiz: {
          ...state.quiz,
          currentQuestion: isFinished ? state.quiz.totalQuestions : nextQuestion,
          isFinished,
        },
        ui: {
          showFeedback: false,
          feedbackData: null,
        },
      };
    case 'RESET_QUIZ':
      return {
        ...initialState,
        user: state.user,
      };
    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const setUser = useCallback((user) => dispatch({ type: 'SET_USER', payload: user }), []);
  const setUserId = useCallback((userId) => dispatch({ type: 'SET_USER_ID', payload: userId }), []);
  const setResult = useCallback((result) => dispatch({ type: 'SET_RESULT', payload: result }), []);
  const startQuiz = useCallback(() => dispatch({ type: 'RESET_QUIZ' }), []);
  const resetQuiz = useCallback(() => dispatch({ type: 'RESET_QUIZ' }), []);

  const value = {
    state,
    dispatch,
    questions,
    actions: {
      setUser,
      setUserId,
      setResult,
      startQuiz,
      resetQuiz
    }
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
