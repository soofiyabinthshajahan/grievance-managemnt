import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  ShieldCheck,
  ChevronRight,
  User,
  Lock,
  ArrowRight
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({ id: '', password: '' });

  const roles = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access your coursework and submit support requests.',
      icon: <GraduationCap size={28} />,
      color: 'from-cyan-500 to-blue-500',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.2)] border-cyan-500/30'
    },
    {
      id: 'mentor',
      title: 'Mentor',
      description: 'Manage your learners and review project progress.',
      icon: <BookOpen size={28} />,
      color: 'from-indigo-500 to-violet-500',
      glow: 'shadow-[0_0_30px_rgba(99,102,241,0.2)] border-indigo-500/30'
    },
    {
      id: 'staff',
      title: 'Staff',
      description: 'Handle administrative workflows and student tracking.',
      icon: <Briefcase size={28} />,
      color: 'from-fuchsia-500 to-pink-500',
      glow: 'shadow-[0_0_30px_rgba(217,70,239,0.2)] border-fuchsia-500/30'
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Full system control, compliance, and core settings.',
      icon: <ShieldCheck size={28} />,
      color: 'from-rose-500 to-orange-500',
      glow: 'shadow-[0_0_30px_rgba(244,63,94,0.2)] border-rose-500/30'
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${selectedRole} with ID: ${formData.id}`);
    // Authentication logic would go here
  };

  const activeRole = roles.find(r => r.id === selectedRole);

  return (
    <div className="min-h-screen bg-[#030014] text-slate-200 font-sans relative overflow-hidden flex flex-col items-center justify-center p-6">
      
      {/* Background Glob */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] blur-[150px] rounded-full pointer-events-none transition-colors duration-1000 ${
          selectedRole === 'student' ? 'bg-cyan-600/10' :
          selectedRole === 'mentor' ? 'bg-indigo-600/10' :
          selectedRole === 'staff' ? 'bg-fuchsia-600/10' :
          selectedRole === 'admin' ? 'bg-rose-600/10' :
          'bg-cyan-600/10'
        }`} 
      />

      {/* Nav Actions */}
      <button 
        onClick={() => {
          if (selectedRole) setSelectedRole(null);
          else navigate('/');
        }} 
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors z-20"
      >
        <ArrowLeft size={20} /> <span className="text-sm font-semibold tracking-wider uppercase">Back</span>
      </button>

      <div className="relative z-10 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {!selectedRole ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-white">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MentorSync</span>
              </h1>
              <p className="text-slate-400 text-lg">Select your portal access level to continue.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`group flex items-center p-6 rounded-[2rem] border bg-white/[0.02] backdrop-blur-md transition-all duration-300 text-left relative overflow-hidden hover:-translate-y-1 border-white/10 hover:border-white/30 hover:bg-white/5 shadow-none hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}
                >
                  <div className="flex-1 flex gap-5 items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{role.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">{role.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all opacity-50 group-hover:opacity-100 group-hover:translate-x-1">
                    <ChevronRight size={18} className="text-white" />
                  </div>
                  
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-md mx-auto animate-in zoom-in-95 duration-500">
            <div className={`bg-white/[0.03] border ${activeRole.glow} backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden`}>
              
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r opacity-50 block w-full" style={{ backgroundImage: `linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)` }}></div>

              <div className="text-center mb-10">
                <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${activeRole.color} flex items-center justify-center shadow-lg mb-6 transform rotate-3`}>
                  <div className="text-white transform -rotate-3 scale-125">
                    {activeRole.icon}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{activeRole.title} Login</h2>
                <p className="text-sm text-slate-400">Enter your official credentials below.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold tracking-wider uppercase text-slate-400 ml-1">{activeRole.title} ID</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      required
                      placeholder={`Enter your ${activeRole.title} ID`}
                      value={formData.id}
                      onChange={(e) => setFormData({...formData, id: e.target.value})}
                      className="w-full bg-[#030014]/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-400">Password</label>
                    <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Forgot Password?</a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                      <Lock size={18} />
                    </div>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full bg-[#030014]/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`w-full relative group overflow-hidden rounded-2xl py-4 font-bold text-white shadow-lg mt-4 flex items-center justify-center gap-2`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeRole.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Secure Login <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
