import React, { useState, useEffect } from 'react';
import { Download, Home, User, Folder, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'contact'];
        
        // Check if we are at the bottom of the page (for Contact)
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 50) {
             setActiveSection('contact');
             return;
        }

        // Find active section based on what's visible at the top of the viewport
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is occupying the top part of the viewport
            // 150px offset provides a good buffer for the fixed navbar
            if (rect.top <= 150 && rect.bottom >= 150) {
               setActiveSection(section);
               break;
            }
          }
        }
      } else if (location.pathname === '/projects') {
        setActiveSection('projects');
      }
    };

    // Set initial active state based on path and scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Handle scroll state from navigation (e.g. redirected from Projects page)
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          setActiveSection(targetId);
          // Clear state so it doesn't scroll on refresh
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }
  }, [location]);

  const handleNavigation = (id: string) => {
    if (id === 'projects') {
      navigate('/projects');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        // We rely on scroll listener to update active section, 
        // but setting it here gives immediate feedback
        setActiveSection(id);
      } else if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveSection('home');
      }
    }
  };

  const navItems = [
    { name: 'Home', id: 'home', icon: <Home size={20} /> },
    { name: 'About', id: 'about', icon: <User size={20} /> },
    { name: 'Projects', id: 'projects', icon: <Folder size={20} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Top Bar (Logo + Resume) */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/60 backdrop-blur-xl shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer z-20" onClick={() => handleNavigation('home')}>
              <span 
                className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
              >
                Srinath D K
              </span>
            </div>
            
            {/* Desktop Navigation - Normal */}
            <div className="hidden md:flex items-center gap-8">
               {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-primary-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
            </div>

            {/* Resume Button */}
            <div className="flex items-center gap-4 z-20">
              <a
                href="#"
                className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Floating Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 max-w-sm pointer-events-none">
        <div className="animate-fade-in-up pointer-events-auto flex items-center justify-between bg-slate-900/20 backdrop-blur-xl rounded-full p-2 border border-white/10 shadow-2xl shadow-black/20">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.id)}
              className={`flex flex-col items-center justify-center w-full py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-primary-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div>
                {item.icon}
              </div>
              <span className="text-[10px] font-medium mt-1">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};