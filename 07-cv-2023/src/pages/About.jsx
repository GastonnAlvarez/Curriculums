import { useState, useRef, useEffect } from "react";
const About = () => {

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
    <section ref={principal} className={`flex h-full mb-24 pb-3 mt-12 ${mostrar ? 'mostrar' : 'ocultar'} backdrop-blur-lg bg-white/30`}>
      <article className="pl-8 text-white w-1/2">
        <p className="aboutme">
          Mi nombre completo es Gaston Alejandro Alvarez, me conocen como <u className="font-bold">Garo</u>.
          Tengo 25 años y estudio programacion desde los 22 años, fue un camino largo complicado y desafiante, pero ahora puedo decir que estoy listo para dar un paso mas.
        </p>
        <p className="aboutme">
          Comenze este camino en la universidad Santo Domingo estuve unos años y luego decidi seguir por mi cuenta como autodidacta ya que sentia que estaba aprendiendo mucho mas.
          Estudio por diferentes medios youtube, documentacion, google, ahora Chat GPT y tengo la oportunidad de estudiar desde Udemy, tengo acceso a todos los cursos, aprendi muchisimo desde la plataforma y sigo aprendiendo todos los dias.
          Actualmente estudio ingles en el instituo IICANA, es un semi-intensivo y estoy en primer año.
        </p>
        <p className="aboutme">
          Me gustaria incorporarme a una empresa para poder rodearme de persona que sepan mas que yo y seguir aprendiendo, poder conocer nuevas personas desarrolladoras que me inpulsen en este camino.
        </p>
      </article>
      <article className="text-white w-1/2 ml-3 mb-1">
        <p className="aboutme">
          Actualmente mi experiencia como programador esta en dar clases en el Insituto Celsius y Digital Mind, me recomendo un ex-profesor de la universidad que asistia, poder compartir mi conocimiento y dar consejos de como estudiar me hace sentir feliz al saber que mis alumnos van por buen camino. Hasta el dia de hoy algunos me siguen hablando.
        </p>
        <p className="aboutme">
          Me encantaria empezar hacer proyectos desafiantes y crecer aun mas, se que tengo la capacidad de adquirir el conocimiento que necesite para estar en una empresa. Me gustaria estar el tiempo que sea necesario en una compañia para combertirme en un Senior en este campo de la programacion.
        </p>
        <p className="aboutme">
          Lo que mas estudie fue FrontEnd ya que hay mucho mas contenido y el Backend no tanto y es mas desafiante.
          Puedo decir que soy FullStack porque gracias a Udemy tengo conocimientos en ambos campos, los dos me gustan pero en un futuro me gustaria ser mas Backend que Fronend.
        </p>
      </article>
    </section>
  )
}

export default About