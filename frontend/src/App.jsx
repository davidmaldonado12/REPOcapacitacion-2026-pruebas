import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';

// Pages
import LandingPage from './pages/01-Landing';
import RegisterPage from './pages/02-Registro';
import Question1 from './pages/03-Pregunta1';
import Question2 from './pages/04-Pregunta2';
import Question3 from './pages/05-Pregunta3';
import Question4 from './pages/06-Pregunta4';
import Question5 from './pages/07-Pregunta5';
import Question6 from './pages/08-Pregunta6';
import Question7 from './pages/09-Pregunta7';
import Question8 from './pages/10-Pregunta8';
import Question9 from './pages/11-Pregunta9';
import Question10 from './pages/12-Pregunta10';
import ResultPage from './pages/13-Resultado';

export default function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        
        {/* Sequence follows the mockup folders */}
        <Route path="/pregunta/1" element={<Question1 />} />
        <Route path="/pregunta/2" element={<Question2 />} />
        <Route path="/pregunta/3" element={<Question3 />} />
        <Route path="/pregunta/4" element={<Question4 />} />
        <Route path="/pregunta/5" element={<Question5 />} />
        <Route path="/pregunta/6" element={<Question6 />} />
        <Route path="/pregunta/7" element={<Question7 />} />
        <Route path="/pregunta/8" element={<Question8 />} />
        <Route path="/pregunta/9" element={<Question9 />} />
        <Route path="/pregunta/10" element={<Question10 />} />
        
        <Route path="/resultado" element={<ResultPage />} />
        
        <Route path="/intro" element={<Navigate to="/pregunta/1" replace />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </QuizProvider>
  );
}
