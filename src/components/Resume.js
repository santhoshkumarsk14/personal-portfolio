import ResumeImg from '../assest/resume.jpg'
import ResumePdf from '../assest/santhosh-resume.pdf'


export default function Resume() {
    return <section id='resume' className='flex flex-col md:flex-row justify-between items-center w-full h-full px-5'>
        <div className='md:w-1/2'>
            <img className="rounded-lg shadow-lg w-[600px]" loading="eager"  src={ResumeImg} />
        </div>
        <div className='mb-32 px-5 py-5 md:w-1/2 flex flex-col'>
            <h3 className='text-4xl font-bold mb-5 w-1/2'>Resume</h3>
            <p >As a passionate full-stack developer, I specialize in creating scalable and efficient web applications using modern technologies such as React.js, Spring Boot, Node.js, TypeScript, and Tailwind CSS. With hands-on experience in both frontend and backend development, I focus on delivering robust solutions that drive business success. Explore my resume to learn more about the projects and skills that make me a versatile developer ready to tackle new challenges.</p>
            <div className='py-5 border-spacing-'>
                <button className='rounded py-2 px-5 text-white bg-slate-800'>
                    <a href={ResumePdf} download="santhosh-resume.pdf">
                        Download
                    </a>

                </button>
            </div>
        </div>

    </section>
}