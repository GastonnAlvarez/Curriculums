import { useRef } from 'react';
import img from '../assets/img01.png';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Home = () => {

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
        <section 
        ref={principal} 
        className={`flex flex-col h-full ${mostrar ? 'mostrar' : 'ocultar'} sm:px-12 sm:py-2 lg:flex-row`}>
            <article className='px-4 pt-10 h-full lg:w-2/3 xl:w-1/2'>
                <h1 className='text-2xl font-bold text-white'>Hola mi nombre es Gaston!</h1>
                <span className='text-2xl font-semibold text-white block'>Desarrollador <span className='maquina block'>Web FullStack Trainer..</span></span>
                <p className='text-white w-full'>
                    En este curriculum Web, conoceran tantos habilidades duras como blandas.
                    Prodran saber sobre mi vida, que me gusta hacer, a que me dedico, mis pasa-tiempos, porque decidi elegir la programacion para dedicarme, entre otras cosas...
                </p>
                <p className='text-white'>
                    Espero que les guste y sin mas que decir comencemos
                    <Link
                        to={'/about'}
                        className='block w-32 text-center mt-2 bg-gradient-to-r from-orange-400 to-orange-700 rounded-md p-2 ml-3 font-bold'>HAZ CLICK!!
                    </Link>
                </p>
            </article>
            <article className='w-60 h-60 overflow-hidden relative left-1/3 lg:w-1/3 lg:left-0 lg:right-0 xl:w-1/2 lg:h-96 lg:w-96'>
                <img src={img} alt="yoo" className='w-full h-auto'/>
            </article>
        </section>
    )
}

export default Home