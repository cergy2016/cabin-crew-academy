'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Compte créé ! Vous pouvez vous connecter.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push('/');
        router.refresh();
      }
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl">✈️</span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-2">Cabin Crew English</h1>
          <p className="text-slate-500 mt-1">{isSignUp ? 'Créez votre compte' : 'Connectez-vous pour continuer'}</p>
        </div>
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="vous@exemple.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
            <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="••••••••" />
          </div>
          {message && <p className="text-sm text-indigo-600 bg-indigo-50 p-3 rounded-lg">{message}</p>}
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50">
            {loading ? 'Chargement...' : (isSignUp ? 'S\'inscrire' : 'Se connecter')}
          </button>
        </form>
        <button onClick={() => setIsSignUp(!isSignUp)} className="w-full text-center mt-6 text-sm text-slate-600 hover:text-indigo-600 transition">
          {isSignUp ? 'Déjà un compte ? Se connecter' : 'Pas de compte ? S\'inscrire'}
        </button>
      </div>
    </div>
  );
}
