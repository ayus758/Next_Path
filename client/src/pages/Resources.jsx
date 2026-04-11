import React, { useState, useEffect } from 'react';
import { Search, Filter, PlayCircle, FileText, Code2, BookOpen, ExternalLink, Loader2 } from 'lucide-react';
import { apiRequest } from '../lib/api';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const loadResources = async () => {
      try {
        const data = await apiRequest('/api/resources');
        setResources(data);
      } catch (err) {
        setError(err.message || 'Failed to load resources');
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'Video': return <PlayCircle className="text-blue-400" />;
      case 'Article': return <FileText className="text-orange-400" />;
      case 'Practice': return <Code2 className="text-green-400" />;
      case 'Notes': return <BookOpen className="text-purple-400" />;
      default: return <FileText className="text-gray-400" />;
    }
  };

  const filteredResources = resources.filter(res => {
    const matchesFilter = activeFilter === 'All' || res.type === activeFilter;
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          res.topic.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-full">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div>
           <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Resource Library</h1>
           <p className="text-[var(--muted-foreground)]">Curated, high-signal preparation materials across the internet.</p>
         </div>

         <div className="w-full md:w-96 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--muted-foreground)]">
               <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search topics or titles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--foreground)]"
            />
         </div>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 hide-scrollbar">
        <div className="flex items-center gap-2 mr-2 text-[var(--muted-foreground)]">
          <Filter size={18} /> <span className="font-medium">Filter:</span>
        </div>
        {['All', 'Video', 'Practice', 'Article', 'Notes'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-colors
              ${activeFilter === filter ? 'bg-[var(--foreground)] text-[var(--background)]' : 'bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--border)]'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="animate-spin text-purple-500 mb-4" size={48} />
          <p className="text-[var(--muted-foreground)]">Fetching library...</p>
        </div>
      ) : error ? (
        <div className="py-20 text-center">
          <p className="text-red-400 font-semibold mb-2">Could not load resources</p>
          <p className="text-[var(--muted-foreground)]">{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length === 0 ? (
            <div className="col-span-full py-12 text-center text-[var(--muted-foreground)]">
               No resources found matching your search criteria.
            </div>
          ) : (
            filteredResources.map(res => (
              <div key={res._id} className="flex flex-col p-6 rounded-2xl glass border border-[var(--border)] group hover:border-purple-500/50 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[var(--secondary)] rounded-xl group-hover:scale-110 transition-transform">
                      {getIcon(res.type)}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold border
                      ${res.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                        res.difficulty === 'Intermediate' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 
                        'bg-red-500/10 text-red-500 border-red-500/20'}`}
                    >
                      {res.difficulty}
                    </span>
                 </div>
                 
                 <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] group-hover:text-purple-400 transition-colors line-clamp-2">
                   {res.title}
                 </h3>
                 <p className="text-sm text-[var(--muted-foreground)] mb-6 flex-1 line-clamp-3">
                   {res.description}
                 </p>
                 
                 <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                   <div className="flex items-center gap-2">
                     <span className="text-xs font-semibold text-[var(--foreground)] bg-[var(--background)] border border-[var(--border)] px-2 py-1 rounded-md">
                       {res.sourceName}
                     </span>
                   </div>
                   <a href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-purple-500 hover:text-purple-400 transition-colors">
                     Open <ExternalLink size={16} />
                   </a>
                 </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Resources;
