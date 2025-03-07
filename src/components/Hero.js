import HeroImg from '../assest/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="hero-section min-h-screen py-16 px-4 md:px-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="text-left flex flex-col w-full md:w-1/2 space-y-6">
                    <div className="animate-fadeIn">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider">FULL-STACK DEVELOPER</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mt-2 leading-tight">
                            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Santhoshkumar</span> Ravichandran
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            I craft responsive, user-friendly web applications with modern technologies. 
                            Passionate about creating clean code and solving complex problems.
                        </p>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center">
                            View My Work
                        </a>
                        <a href="/resume.pdf" download className="px-6 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center">
                            <FaDownload className="mr-2" /> Download Resume
                        </a>
                    </div>
                    
                    {/* Social Icons */}
                    <div className="flex mt-8 space-x-5">
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <AiOutlineTwitter size={28} />
                        </a>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <AiOutlineFacebook size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/santhoshkumar-ravichandran-bb9053208/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <AiOutlineLinkedin size={28} />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <AiOutlineGithub size={28} />
                        </a>
                    </div>
                </div>
                
                {/* Image Container */}
                <div className="w-full md:w-1/2 animate-slideIn">
                    <div className="relative">
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70 -top-10 -right-10"></div>
                        <div className="absolute -z-10 w-48 h-48 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-3xl opacity-70 bottom-10 -left-10"></div>
                        
                        {/* Main Image with Frame */}
                        <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                            <img 
                                className="w-full object-cover" 
                                loading="eager" 
                                src={HeroImg} 
                                alt="Santhoshkumar Ravichandran - Full Stack Developer" 
                            />
                            
                            {/* Tech Stack Icons/badges could go here */}
                            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-tl-lg shadow-lg">
                                <div className="text-sm font-medium text-gray-800 dark:text-white">3+ Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}