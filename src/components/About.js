
import { Code2, Database, Layout, Server, Terminal, Coffee } from 'lucide-react';
import HeroImg from '../assest/about.png';

export default function About() {
    const skills = [
        { icon: <Layout className="w-6 h-6" />, name: "Frontend Development", description: "React.js, TypeScript, Tailwind CSS" },
        { icon: <Server className="w-6 h-6" />, name: "Backend Development", description: "Java, Spring Boot, Node.js" },
        { icon: <Database className="w-6 h-6" />, name: "Database", description: "MySQL, PostgreSQL, MongoDB" },
        { icon: <Terminal className="w-6 h-6" />, name: "DevOps", description: "Docker, CI/CD, AWS" },
        { icon: <Code2 className="w-6 h-6" />, name: "Programming", description: "Java, JavaScript, Python" },
        { icon: <Coffee className="w-6 h-6" />, name: "Other Skills", description: "Problem Solving, Team Leadership" }
    ];

    return (
        <section id="about"className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <img
                                src={HeroImg}
                                alt="Developer workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-2xl -z-10"></div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                I'm a full-stack developer with expertise in Java, Spring Boot, React.js, Docker, and MySQL. 
                                I build scalable, high-performance web applications that help businesses thrive. 
                                Currently focused on launching a Micro SaaS product by 2025, 
                                I'm passionate about delivering clean, efficient solutions and 
                                continuously learning to stay ahead of emerging technologies.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                                            <p className="text-sm text-gray-600">{skill.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex space-x-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                            >
                                Get in Touch
                            </a>
                            {/* <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
                            >
                                Download CV
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}