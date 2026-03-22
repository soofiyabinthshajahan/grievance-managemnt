import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access your coursework and submit support requests.',
      icon: <GraduationCap size={28} />,
      color: 'from-cyan-500 to-blue-500',
      glow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] border-cyan-500/30 group-hover:bg-cyan-500/10'
    },
    {
      id: 'mentor',
      title: 'Mentor',
      description: 'Manage your learners and review project progress.',
      icon: <BookOpen size={28} />,
      color: 'from-indigo-500 to-violet-500',
      glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] border-indigo-500/30 group-hover:bg-indigo-500/10'
    },
    {
      id: 'staff',
      title: 'Staff',
      description: 'Handle administrative workflows and student tracking.',
      icon: <Briefcase size={28} />,
      color: 'from-fuchsia-500 to-pink-500',
      glow: 'group-hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] border-fuchsia-500/30 group-hover:bg-fuchsia-500/10'
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Full system control, compliance, and core settings.',
      icon: <ShieldCheck size={28} />,
      color: 'from-rose-500 to-orange-500',
      glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] border-rose-500/30 group-hover:bg-rose-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-slate-200 font-sans relative overflow-hidden flex flex-col items-center justify-center p-6">
      
      {/* Background Glob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Nav Actions */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors z-20"
      >
        <ArrowLeft size={20} /> <span className="text-sm font-semibold tracking-wider uppercase">Back</span>
      </button>

      <div className="relative z-10 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        
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
              className={`group flex items-center p-6 rounded-[2rem] border bg-white/[0.02] backdrop-blur-md transition-all duration-300 text-left relative overflow-hidden ${role.glow} ${selectedRole === role.id ? 'scale-[1.02] border-white/50 bg-white/10' : 'border-white/10 hover:-translate-y-1'}`}
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

        {selectedRole && (
          <div className="mt-12 text-center animate-in fade-in zoom-in duration-300">
            <button className="relative px-10 py-4 rounded-full font-bold text-white overflow-hidden group shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2 text-lg tracking-wide">
                Continue as {roles.find(r => r.id === selectedRole)?.title} <ArrowLeft size={20} className="rotate-180" />
              </span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
