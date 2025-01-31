
import AboutImg from '../assest/about.png'

export default function About() {
    return <section id='about' className='flex flex-col md:flex-row justify-between items-center w-full h-full px-5'>
        <div className='md:w-1/2'>
            <img className="rounded-lg shadow-lg" loading="eager"  src={AboutImg} />
        </div>
        <div className='px-5 py-5 md:w-1/2'>
            <h3 className='text-4xl font-bold mb-5 w-1/2'>About Me</h3>
            <p >I’m a full-stack developer with expertise in Java, Spring Boot, React.js, Docker, and MySQL.
                I build scalable, high-performance web applications that help businesses thrive.
                Currently focused on launching a Micro SaaS product by 2025,
                I’m passionate about delivering clean, efficient solutions and
                continuously learning to stay ahead of emerging technologie</p>
        </div>
    </section>
}