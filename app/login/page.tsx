'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push('/');
      router.refresh();
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
          <p className="text-emerald-500 font-bold mt-2">NOUVEAU CODE DEPLOYE !</p>
        </div>
        <form onSubmit={handleAuth} className="space-y-4">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" placeholder="Email" />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 border rounded-xl" placeholder="Mot de passe" />
          {message && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{message}</p>}
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl">{loading ? 'Chargement...' : 'Se connecter'}</button>
        </form>
      </div>
    </div>
  );
}
