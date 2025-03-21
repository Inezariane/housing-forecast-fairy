
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Info, History, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', icon: <Home className="h-4 w-4 mr-2" />, path: '/' },
    { name: 'How It Works', icon: <Info className="h-4 w-4 mr-2" />, path: '/how-it-works' },
    { name: 'Price History', icon: <History className="h-4 w-4 mr-2" />, path: '/history' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-soft' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-all duration-300">
            <Home className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight">
            HomeValue<span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <Button>Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2 rounded-md hover:bg-primary/5 transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-medium animate-slide-down p-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center p-2 hover:bg-primary/5 rounded-md transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <Button className="mt-2 w-full" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
