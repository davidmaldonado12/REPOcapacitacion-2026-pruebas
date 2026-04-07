import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../../components/layout/AppHeader';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { useQuiz } from '../../context/QuizContext';
import { registerUser } from '../../api/quiz';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { actions } = useQuiz();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email) newErrors.email = 'El correo es obligatorio';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const { userId } = await registerUser(formData);
      actions.setUser(formData);
      actions.setUserId(userId);
      navigate('/intro');
    } catch (err) {
      console.error(err);
      setErrors({ server: 'Error al registrar usuario. Intentalo de nuevo.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
      <AppHeader variant="registration" />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full flex flex-col items-center">
          <div className="mb-12 text-center">
            <h1 className="font-headline font-bold text-4xl md:text-5xl text-on-surface tracking-tight leading-tight">
              Inventate un nombre y un correo electronico.
            </h1>
            <p className="mt-6 text-on-surface-variant text-lg leading-relaxed max-w-md mx-auto">
              Tus datos se usaran para registrar tu participacion y guardar tu resultado del quiz.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-12">
            <div className="space-y-8">
              <InputField
                label="Nombre*"
                name="name"
                placeholder="Ej. Juan Perez"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Correo electronico*"
                name="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              {errors.server && (
                <p className="text-error text-sm text-center">{errors.server}</p>
              )}
            </div>

            <div className="flex flex-col items-center space-y-6 pt-4">
              <Button type="submit" size="lg" icon="arrow_forward" disabled={loading}>
                {loading ? 'Registrando...' : 'Empezar'}
              </Button>
              <div className="flex items-center space-x-2 text-on-surface-variant/60 font-label text-[0.7rem] uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>Privacidad garantizada</span>
              </div>
            </div>
          </form>
        </div>
      </main>

      <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-primary-fixed/20 rounded-full blur-[100px] -z-10"></div>
      <div className="fixed -top-24 -right-24 w-64 h-64 bg-secondary-container/10 rounded-full blur-[80px] -z-10"></div>

      <footer className="w-full py-12 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-8">
          <a className="text-on-surface-variant font-label text-[0.75rem] tracking-[0.1em] uppercase hover:text-primary transition-colors" href="#">Privacidad</a>
          <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
          <a className="text-on-surface-variant font-label text-[0.75rem] tracking-[0.1em] uppercase hover:text-primary transition-colors" href="#">Condiciones</a>
        </div>
        <div className="mt-6">
          <img
            alt="Google Logo"
            className="h-6 opacity-20 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKwS4hI1sRy68-oH3dm6-BG4LtrcXPkoxe5L2KuuiPQN4BPY6cd4Yjxt7JAMc-uwzeF2k0ZmpN046ko7eTfn6AQ9kzkXZbjU7Em96BdFNMjbOiCr8j8t6Ccg_c8QsaOFv93MDXqW3Vitl2BR3C90UDc5Pcrt6xuk4M6FE128Lq0Lh2C4B8I7OsZUCdlsKV8wf9Oxv66skcJwJlpQZEufgnugCcLTDbR23OOmtKZyUNiPMM4IuzB_Lve-03KLMIE1qui7cNMoyBC5k"
          />
        </div>
      </footer>
    </div>
  );
}
