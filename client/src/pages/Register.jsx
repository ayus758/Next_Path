import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Target, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { apiRequest } from '../lib/api';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    targetGoal: 'Placement',
    skillLevel: 'Beginner',
    targetBranch: 'CSE'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await apiRequest('/api/auth/register', {
        method: 'POST',
        body: formData,
        auth: false,
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center relative overflow-hidden p-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="w-full max-w-md relative z-10 my-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-2">
            PrepFusion
          </Link>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-4">Create your account</h2>
          <p className="text-[var(--muted-foreground)] mt-2">Start your personalized preparation journey.</p>
        </div>

        <div className="glass p-8 rounded-2xl border border-[var(--border)] shadow-xl">
          {error && <div className="bg-destructive/10 text-destructive p-3 rounded-lg mb-6 text-sm">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted-foreground)]"><User size={18} /></div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)] text-sm" placeholder="John Doe" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted-foreground)]"><Mail size={18} /></div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)] text-sm" placeholder="you@example.com" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted-foreground)]"><Lock size={18} /></div>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)] text-sm" placeholder="••••••••" minLength={6} required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1">Target Goal</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-[var(--muted-foreground)]"><Target size={16} /></div>
                  <select name="targetGoal" value={formData.targetGoal} onChange={handleChange} className="w-full pl-8 pr-2 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)] text-sm appearance-none cursor-pointer">
                    <option value="Placement">Placement</option>
                    <option value="GATE">GATE</option>
                    <option value="UPSC">UPSC</option>
                    <option value="JEE">JEE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1">Current Skill</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-[var(--muted-foreground)]"><BookOpen size={16} /></div>
                  <select name="skillLevel" value={formData.skillLevel} onChange={handleChange} className="w-full pl-8 pr-2 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)] text-sm appearance-none cursor-pointer">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">Branch/Major</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted-foreground)]"><Briefcase size={18} /></div>
                <input type="text" name="targetBranch" value={formData.targetBranch} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)] text-sm" placeholder="e.g., Computer Science, ECE" required />
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full mt-6 bg-[var(--foreground)] text-[var(--background)] py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
              {loading ? 'Creating...' : 'Create Account'}
              {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <p className="text-center mt-6 text-[var(--muted-foreground)] text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-500 hover:text-purple-400 font-bold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
