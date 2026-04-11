import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, PlayCircle, FileText, Code2, BrainCircuit, Loader2 } from 'lucide-react';
import { apiRequest } from '../lib/api';

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadRoadmap = async () => {
      try {
        const data = await apiRequest('/api/roadmap');
        setRoadmap(data);
      } catch (err) {
        setError(err.message || 'Failed to load roadmap');
      } finally {
        setLoading(false);
      }
    };

    loadRoadmap();
  }, []);

  const getTaskIcon = (type) => {
    switch (type) {
      case 'Video': return <PlayCircle size={18} className="text-blue-400" />;
      case 'Article': return <FileText size={18} className="text-orange-400" />;
      case 'Practice': return <Code2 size={18} className="text-green-400" />;
      case 'Concept': return <BrainCircuit size={18} className="text-purple-400" />;
      default: return <FileText size={18} className="text-gray-400" />;
    }
  };

  const toggleTask = async (mId, tId) => {
    try {
      const updatedRoadmap = await apiRequest(`/api/roadmap/task/${mId}/${tId}`, {
        method: 'PUT',
      });
      setRoadmap(updatedRoadmap);
    } catch (err) {
      setError(err.message || 'Failed to update task status');
    }
  };

  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center pt-20">
        <Loader2 className="animate-spin text-purple-500 mb-4" size={48} />
        <p className="text-[var(--muted-foreground)]">Generating your personalized roadmap...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex flex-col items-center justify-center pt-20 px-6 text-center">
        <p className="text-red-400 font-semibold mb-2">Could not load roadmap</p>
        <p className="text-[var(--muted-foreground)]">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-10">
         <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
           {roadmap.targetGoal} Engine
         </h1>
         <p className="text-[var(--muted-foreground)] mb-6">Your intelligent, dynamically adjusting curriculum.</p>
         
         <div className="bg-[var(--secondary)] h-4 w-full rounded-full overflow-hidden">
           <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out" 
              style={{ width: `${roadmap.progressPercentage}%` }}
           ></div>
         </div>
         <p className="text-right text-sm text-[var(--muted-foreground)] mt-2 font-bold">{roadmap.progressPercentage}% Completed</p>
      </div>

      <div className="space-y-12">
        {roadmap.milestones.map((milestone, idx) => (
          <div key={milestone._id} className="relative">
            {/* Timeline connector line */}
            {idx !== roadmap.milestones.length - 1 && (
               <div className="absolute left-[19px] top-12 bottom-[-48px] w-[2px] bg-[var(--border)] z-0"></div>
            )}
            
            <div className="flex items-start gap-6 relative z-10">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                  ${milestone.status === 'Active' ? 'bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 
                    milestone.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-[var(--secondary)] text-[var(--muted-foreground)] border border-[var(--border)]'}`}>
                  {idx + 1}
               </div>
               
               <div className={`flex-1 glass p-6 rounded-2xl border ${milestone.status === 'Active' ? 'border-purple-500/30' : 'border-[var(--border)]'}`}>
                 <h2 className="text-xl font-bold mb-1 flex items-center justify-between">
                   {milestone.title}
                   {milestone.status === 'Active' && <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full uppercase tracking-wider">In Progress</span>}
                 </h2>

                 <div className="mt-6 space-y-3">
                   {milestone.tasks.map(task => (
                      <div 
                         key={task._id} 
                         onClick={() => toggleTask(milestone._id, task._id)}
                         className={`flex items-center justify-between p-4 rounded-xl border border-[var(--border)] cursor-pointer transition-all duration-200
                           ${task.isCompleted ? 'bg-[var(--secondary)]/50 opacity-60' : 'bg-[var(--background)] hover:border-purple-500/50 hover:shadow-md'}`}
                      >
                        <div className="flex items-center gap-4">
                           {task.isCompleted ? 
                             <CheckCircle2 size={24} className="text-green-500 flex-shrink-0" /> : 
                             <Circle size={24} className="text-[var(--muted-foreground)] hover:text-purple-400 flex-shrink-0" />
                           }
                           <div>
                             <h4 className={`font-semibold ${task.isCompleted ? 'line-through text-[var(--muted-foreground)]' : 'text-[var(--foreground)]'}`}>
                               {task.title}
                             </h4>
                             <div className="flex items-center gap-2 mt-1 text-xs text-[var(--muted-foreground)]">
                               {getTaskIcon(task.type)}
                               <span>{task.type}</span>
                               <span className="w-1 h-1 rounded-full bg-[var(--border)] mx-1"></span>
                               <span>~{task.estimatedHours}h</span>
                             </div>
                           </div>
                        </div>
                      </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
