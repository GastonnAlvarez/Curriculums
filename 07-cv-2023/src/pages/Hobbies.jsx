import { useEffect, useRef, useState } from "react";

const Hobbies = () => {

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
    <>
    <h2 className="text-white text-center bg-black">Toca F12, por si no se renderiza</h2>
      <section ref={principal} className={`mt-12 lg:-mt-10 lg:px-12 lg:py-8 xl:px-12 xl:py-8 ${mostrar ? 'mostrar' : 'ocultar'}`}>
        <div className="text-white grid grid-cols-1 gap-2 sm:grid-cols-2">
          <article className="backdrop-blur-lg bg-white/30 py-3 px-2 rounded">
            <h2 className="text-center text-2xl font-bold">Gym</h2>
            <p>Todos los dias de 'lunes a viernes' aveces los 'sabados' voy al gimnasio, tengo un objetivo en mente para poder tener el fisico que deseo. Como sano y tengo un entrenador que me guia en cada ejercicio a su vez me exige en cada ejercicio.</p>
            <div className="w-full h-52 img">
            </div>
          </article>
          <article className="backdrop-blur-lg bg-white/30 py-3 px-2 rounded">
            <h2 className="text-center text-2xl font-bold">Pasear a mi Perro</h2>
            <p>Este es mi perro 'Lobo', me gusta sacarlo a pasear ya que amo ami perro y tambien es una forma de despejarme y hacer otra cosa que no sea estudiar y trabajar.</p>
            <div className="w-full h-52 img01 sm:mt-12 lg:mt-6">
            </div>
          </article>
          <article className="backdrop-blur-lg bg-white/30 py-3 px-2 rounded">
            <h2 className="text-center text-2xl font-bold">Juegos</h2>
            <p>Me encantan los videos juegos, mi ultimo juego y el que mas horas le dedique fue 'Fortnite', jugue desde sus inicio con un gran amigo que hasta el dia de hoy jugamos. Sobre todo me gustan los competitivos de 'Fortnite' estuve jugando en diversor torneos y copas.</p>
            <div className="w-full h-52 img02 sm:mt-8 lg:mt-20">
            </div>
          </article>
          <article className="backdrop-blur-lg bg-white/30 py-3 px-2 rounded">
            <h2 className="text-center text-2xl font-bold">Salidas</h2>
            <p>Los fines de samanas no todos, pero me gusta ir a bares o los domingos a merendar con amigos y amigas.</p>
            <div className="w-full h-52 img03 mt-12 sm:mt-32">
            </div>
          </article>
        </div>
      </section >
    </>
  );
};


export default Hobbies