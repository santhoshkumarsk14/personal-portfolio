import HeroImg from '../assest/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="hero-section h-full ">
            <div className="text-left flex flex-col ">
                <h1 className='text-4xl text-black '>
                    Hi, <br /> I'm Santhoshkumar Ravichandran
                    <p className='text-2xl'>I'm a full-stack developer</p>
                </h1>
                {/* <button>Download Resume</button> */}
                <div className='flex py-5'>
                    <a href='#' className='pr-3 hover:text-blue-600'><AiOutlineTwitter size={35}/></a>
                    <a href='#' className='pr-3 hover:text-blue-600'><AiOutlineFacebook size={35}/></a>
                    <a href='https://www.linkedin.com/in/santhoshkumar-ravichandran-bb9053208/' target="_blank" rel="noopener noreferrer" className='hover:text-blue-600'><AiOutlineLinkedin size={35}/></a>
                </div>
            </div>
            
            <img className="md:w-1/2 rounded-lg shadow-lg" loading="eager"  src={HeroImg} alt="Hero" />
        </section>
    );
}
