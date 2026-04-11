import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { apiRequest } from '../lib/api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: formData,
        auth: false,
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center relative overflow-hidden p-4">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-2">
            PrepFusion
          </Link>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-4">Welcome back</h2>
          <p className="text-[var(--muted-foreground)] mt-2">Log in to continue your preparation journey.</p>
        </div>

        <div className="glass p-8 rounded-2xl border border-[var(--border)] shadow-xl">
          {error && <div className="bg-destructive/10 text-destructive p-3 rounded-lg mb-6 text-sm">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted-foreground)]">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)]"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2 flex justify-between">
                <span>Password</span>
                <span className="text-purple-500 hover:text-purple-400 cursor-pointer text-xs">Forgot password?</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted-foreground)]">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)]"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--foreground)] text-[var(--background)] py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              {loading ? 'Logging in...' : 'Log In'}
              {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <p className="text-center mt-6 text-[var(--muted-foreground)] text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-purple-500 hover:text-purple-400 font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
