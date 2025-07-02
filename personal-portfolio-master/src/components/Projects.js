import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            name: 'E-commerce Platform',
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
            description: 'A scalable online shopping platform built with React.js for the frontend and Node.js for the backend. It supports dynamic product listings, user authentication, and a secure payment gateway.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
            liveUrl: 'https://ecommerce-demo.com',
            githubUrl: 'https://github.com/yourusername/ecommerce'
        },
        {
            name: 'Number Finding Game',
            image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            description: 'A fun and interactive game built entirely with React.js. Players guess a hidden number, and the app provides hints to guide them to the correct answer.',
            tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
            liveUrl: 'https://number-game-demo.com',
            githubUrl: 'https://github.com/yourusername/number-game'
        },
        {
            name: 'Currency Converter',
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            description: 'A responsive currency converter application built with React.js and TypeScript. It allows users to convert currencies in real-time using live exchange rates, ensuring type safety and high performance.',
            tech: ['React.js', 'TypeScript', 'Exchange Rate API'],
            liveUrl: 'https://currency-converter-demo.com',
            githubUrl: 'https://github.com/yourusername/currency-converter'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        These projects showcase my expertise in building full-stack applications 
                        with modern technologies including React.js, Spring Boot, Node.js, 
                        TypeScript, and Tailwind CSS.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative group h-48 overflow-hidden">
                                <img 
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}