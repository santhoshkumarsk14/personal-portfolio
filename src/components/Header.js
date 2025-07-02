import { useState, useEffect } from 'react';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';

export default function Header() {
    const [toggleState, setToggleState] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            // Handle active section
            const sections = ['home', 'about', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY;
            
            setIsScrolled(scrollPosition > 20);
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center ">
                        <a href="/" className="flex items-center space-x-2 group">
                            <Code2 className="h-8 w-8 text-blue-600 transition-transform group-hover:rotate-12" />
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gray-900">Santhoshkumar</span>
                                <span className="text-xs text-gray-500 -mt-1">Full Stack Developer</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors
                                    ${activeSection === (item === 'Home' ? 'home' : item.toLowerCase())
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                            >
                                {item}
                                {activeSection === (item === 'Home' ? 'home' : item.toLowerCase()) && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                                )}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 inline-flex items-center px-4 py-2 border border-blue-600 rounded-full
                                text-sm font-medium text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white
                                transition-colors duration-300"
                        >
                            Resume <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700
                            hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        onClick={() => setToggleState(!toggleState)}
                    >
                        {toggleState ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    toggleState ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                    <nav className="px-2 pt-2 pb-4 space-y-1 bg-white/80 backdrop-blur-md">
                        {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    activeSection === (item === 'Home' ? 'home' : item.toLowerCase())
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                                onClick={() => setToggleState(false)}
                            >
                                {item}
                            </a>
                        ))}
                    
                    </nav>
                </div>
            </div>
        </header>
    );
}