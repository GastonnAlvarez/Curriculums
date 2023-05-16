import { useState, useRef, useEffect } from "react";
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import { IoIosContact } from 'react-icons/io'
import { Link } from "react-router-dom";
const Contact = () => {

    // Intersection Observer
    const [mostrar, setMostrar] = useState(false);
    let principal = useRef(null);
    useEffect(() => {

        function callback(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setMostrar(true);
                    }, 100);
                }
            });
        }

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }

        const observer = new IntersectionObserver(callback, options);
        if (principal.current) {
            observer.observe(principal.current);
        }

        return () => {
            if (principal.current) {
                observer.unobserve(principal.current);
            }
        }
    }, []);

    return (
        <section ref={principal} className={`mx-12 mt-24 lg:mt-0 ${mostrar ? 'mostrar' : 'ocultar'} backdrop-blur-lg bg-white/30`}>
            <div className="p-2 py-5 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-5">
                <Link className="border-white border-b-2 pb-2" to={'https://www.instagram.com/gaaro.gaaroo/'}>
                    <span className="flex items-center">
                        <BiLogoInstagramAlt className="text-3xl sm:text-6xl" />
                        <p className="pl-6">Este soy yo!</p>
                    </span>
                </Link>
                <Link className="border-white border-b-2 pb-2" to={'https://www.facebook.com/Gaaro.gaaroo/'}>
                    <span  className="flex items-center">
                        <BsFacebook className="text-4xl sm:text-6xl" />
                        <p className="pl-6">En Face solo comparto memes, espero que se rian!</p>
                    </span>
                </Link>
                <Link className="border-white border-b-2 pb-2" to={'https://www.linkedin.com/in/gaston-alejandro-alvarez-87519223a/'}>
                    <span className="flex items-center">
                        <BsLinkedin className="text-3xl sm:text-6xl" />
                        <p className="pl-6">Este es mi LinkedIn, publico lo que practico.</p>
                    </span>
                </Link>
                <Link className="border-white border-b-2 pb-2" to={'https://github.com/GastonnAlvarez?tab=repositories'}>
                    <span  className="flex items-center">
                        <BsGithub className="text-6xl" />
                        <p className="pl-6">En mi github, encontraran todos los proyectos o simples practicas que hecho.</p>
                    </span>
                </Link>
                <span className="flex items-center">
                    <IoIosContact className="text-3xl sm:text-6xl"/>
                    <p className="pl-6">0351 813 3075</p>
                </span>
            </div>
        </section>
    )
}

export default Contact