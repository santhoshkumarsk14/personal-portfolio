import DynamicProjects from "./DynamicProjects"
import Ecommerce from '../assest/18980.jpg'
import GameImg from '../assest/game.jpg'
import Currency from '../assest/currency.jpg'


export default function Projects() {

    const projectObj = [
        {
            name: 'E-commerce',
            image: Ecommerce,
            desc: 'A scalable online shopping platform built with React.js for the frontend and Node.js for the backend. It supports dynamic product listings, user authentication, and a secure payment gateway.',
        },
        {
            name: 'Number Finding Game',
            image: GameImg,
            desc: 'A fun and interactive game built entirely with React.js. Players guess a hidden number, and the app provides hints to guide them to the correct answer',
        },
        {
            name: 'Currency Conventor',
            image: Currency,
            desc: 'A responsive currency converter application built with React.js and TypeScript. It allows users to convert currencies in real-time using live exchange rates, ensuring type safety and high performance.',
        }
    ]



    return <setion id="project" className="flex flex-col md:flex-row items-center justify-between px-5">
        <div className='px-5 py-5 md:w-1/2'>
            <h3 className='text-4xl font-bold mb-5 w-1/2'>Projects</h3>
            <p >These projects are developed using a combination of React.js, Spring Boot, Node.js, TypeScript, and styled with Tailwind CSS, showcasing my expertise in building full-stack applications with modern technologies</p>
        </div>
        <div>
            <DynamicProjects projectObj={projectObj} />
        </div>
    </setion>
}