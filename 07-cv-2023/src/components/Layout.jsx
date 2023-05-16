import { Outlet, Link } from 'react-router-dom'
import ParticlesBrackground from './ParticlesBackground'
import { useState } from 'react'

const Layout = () => {
    const [click1, setClick1] = useState(true);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    const [click5, setClick5] = useState(false);

    const handleRoute1 = () => {
        setClick1(true);
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(false)
    };
    const handleRoute2 = () => {
        setClick1(false);
        setClick2(true)
        setClick3(false)
        setClick4(false)
        setClick5(false)
    };
    const handleRoute3 = () => {
        setClick1(false);
        setClick2(false)
        setClick3(true)
        setClick4(false)
        setClick5(false)
    };
    const handleRoute4 = () => {
        setClick1(false);
        setClick2(false)
        setClick3(false)
        setClick4(true)
        setClick5(false)
    };
    const handleRoute5 = () => {
        setClick1(false);
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(true)
    };


    return (
        <>
            <ParticlesBrackground />
            <div className='w-96 backdrop-blur-md bg-white/30 fixed bottom-10 right-1/2 translate-x-1/2 px-12 py-3 rounded-full z-50'>
                <nav className='flex justify-between gap-2'>
                    <Link
                        onClick={handleRoute1}
                        className={`hover:text-white transition-all ease-in ${click1 ? 'text-white' : null}`}
                        to='/'>Inicio</Link>
                    <Link
                        onClick={handleRoute2}
                        className={`hover:text-white transition-all ease-in ${click2 ? 'text-white' : null}`}
                        to='/about'>Sobre Mi</Link>
                    <Link
                        onClick={handleRoute3}
                        className={`hover:text-white transition-all ease-in ${click3 ? 'text-white' : null}`}
                        to='/skills'>Skills</Link>
                    <Link
                        onClick={handleRoute4}
                        className={`hover:text-white transition-all ease-in ${click4 ? 'text-white' : null}`}
                        to='/hobbies'>Hobbies</Link>
                    <Link
                        onClick={handleRoute5}
                        className={`hover:text-white transition-all ease-in ${click5 ? 'text-white' : null}`}
                        to='/contact'>Contact</Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Layout