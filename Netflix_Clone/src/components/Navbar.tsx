import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, Settings, User as UserIcon, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockProfile } from '../data/mockData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900' : 'bg-gradient-to-b from-black/75 to-transparent'}`}>
      <div className="px-4 md:px-16 py-4 flex items-center">
        <Link to="/" className="text-red-600 text-3xl font-bold">NETFLIX</Link>
        
        <div className="flex-1 ml-8 gap-7 hidden md:flex">
          <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
          <Link to="/tv-shows" className="text-white hover:text-gray-300 transition">TV Shows</Link>
          <Link to="/movies" className="text-white hover:text-gray-300 transition">Movies</Link>
          <Link to="/latest" className="text-white hover:text-gray-300 transition">Latest</Link>
          <Link to="/my-list" className="text-white hover:text-gray-300 transition">My List</Link>
        </div>

        <div className="flex items-center gap-7 ml-auto">
          <div ref={searchRef} className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="absolute right-0 top-[-10px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Titles, people, genres"
                  className="bg-black/75 text-white px-4 py-2 rounded-md w-[250px] border border-white/20 focus:outline-none focus:border-white"
                  autoFocus
                />
              </form>
            ) : (
              <Search 
                className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition" 
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>
          <Bell className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition" />
          <div ref={profileRef} className="relative">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className="w-8 h-8 rounded-md overflow-hidden">
                <img src={mockProfile.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`} />
            </div>

            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg py-2 w-48">
                <div className="px-4 py-2">
                  <p className="text-white font-medium">{mockProfile.name}</p>
                  <p className="text-gray-400 text-sm">{mockProfile.email}</p>
                </div>
                <div className="border-t border-zinc-700 my-2"></div>
                <Link 
                  to="/profile" 
                  className="flex items-center gap-3 px-4 py-2 text-white hover:bg-zinc-800 transition"
                >
                  <Settings className="w-4 h-4" />
                  Account Settings
                </Link>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-2 text-white hover:bg-zinc-800 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};