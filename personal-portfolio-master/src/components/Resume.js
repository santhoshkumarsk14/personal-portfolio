import { BriefcaseIcon, Code2, Database, Layout, Server, Terminal, Coffee } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            company: "One Click Solutions- Singapore",
            position: "Software developer (Contract)",
            period: "2025 - Present",
            description: "Transforming manual processes into automated solutions with the latest technologies.",
            achievements: [
                "Developed a static website to establish the company's online presence.",
                "Implementing a comprehensive user management system for the company, covering payroll, invoicing, timesheet management, and more.",
                "Implemented CI/CD pipelines using Jenkins"
            ]
        },
        {
            company: "Solverminds solutions and technologies - Chennai",
            position: "Full Stack Developer",
            period: "2022-2025",
            description: "Worked on building scalable web applications using Java full stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
            achievements: [
                "Reduced application load time by 60%",
                "Implemented real-time features using WebSocket",
                "Developed reusable component library"
            ]
        }
    ];

    const skills = [
        {
            icon: <Layout className="w-6 h-6" />,
            category: "Frontend Development",
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Redux"]
        },
        {
            icon: <Server className="w-6 h-6" />,
            category: "Backend Development",
            skills: [ "Spring Boot", "RESTful APIs", "Microservices" ]
        },
        {
            icon: <Database className="w-6 h-6" />,
            category: "Database",
            skills: [ "MySQL", "Redis", "Elasticsearch"]
        },
        {
            icon: <Terminal className="w-6 h-6" />,
            category: "DevOps",
            skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins"]
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            category: "Programming Languages",
            skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"]
        },
        {
            icon: <Coffee className="w-6 h-6" />,
            category: "Other Skills",
            skills: ["Agile Methodology", "Team Leadership", "Problem Solving", "System Design"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience & Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Timeline */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Work Experience</h3>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

                            {/* Experience Items */}
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-12 pb-12 last:pb-0">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <BriefcaseIcon className="w-4 h-4 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-sm font-semibold text-gray-900">{exp.company}</h4>
                                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-lg font-medium text-gray-700 mb-3">{exp.position}</p>
                                        <p className="text-gray-600 mb-4">{exp.description}</p>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-center text-gray-600">
                                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.map((category, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            {category.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {category.category}
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, i) => (
                                            <span 
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}