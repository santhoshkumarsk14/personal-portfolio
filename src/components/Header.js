import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleState, setToggleState] = useState(false);

    return (
        <header className="h-12 border-b-2 fixed w-full">
            <a className="font-bold text-black  text-4xl" href="/">
                Santhoshkumar
            </a>
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a href="/" className='hover:text-blue-600 font-bold'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='hover:text-blue-600 font-bold'>About</a>
                    </li>
                    <li>
                        <a href="#project" className='hover:text-blue-600 font-bold'>Project</a>
                    </li>
                    <li>
                        <a href="#resume" className='hover:text-blue-600 font-bold'>Resume</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:text-blue-600 font-bold'>Contact</a>
                    </li>
                </ul>
            </nav>
            {toggleState && (
                <nav className="block md:hidden">
                    <ul className="mobile-nav">
                        <li>
                            <a href="/" >Home</a>
                        </li>
                        <li>
                            <a href="#about" >About</a>
                        </li>
                        <li>
                            <a href="#project" >Project</a>
                        </li>
                        <li>
                            <a href="#resume" >Resume</a>
                        </li>
                        <li>
                            <a href="#contact" >Contact</a>
                        </li>
                    </ul>
                </nav>
            )}
            <button
                className="block md:hidden"
                onClick={() => setToggleState(!toggleState)}
            >
                <Bars3Icon className="h-6 text-gray-700" />
            </button>
        </header>
    );
}
