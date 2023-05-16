import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import img01 from '../assets/htmlcssjs.jpg'
import img02 from '../assets/reactjs.jpg'
import img03 from '../assets/node.jpg'
import img04 from '../assets/docker.png'
import img05 from '../assets/github.jpg'
import img06 from '../assets/twcss.png'
import img07 from '../assets/bootstrap.png'
import img08 from '../assets/mysql.png'

// Modal Components
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// Modal Style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(0,0,0,0.7)',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  color: '#fff',
};

const height = {
  height: '208px',
}

// Import Swiper styles
import 'swiper/css';

const Skills = () => {
  // Modal Components
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [open6, setOpen6] = React.useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);

  const [open7, setOpen7] = React.useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);

  const [open8, setOpen8] = React.useState(false);
  const handleOpen8 = () => setOpen8(true);
  const handleClose8 = () => setOpen8(false);

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
      <section ref={principal} className={`mt-36 sm:px-3 sm:mt-36 lg:mt-16 ${mostrar ? 'mostrar' : 'ocultar'}`}>
        <h2 className="text-white text-2xl pb-3 font-bold">Desliza el Slider</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col">
              <div className="w-full">
                <img src={img01} alt="" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 sm:left-6 sm:top-6 lg:z-50 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2">HTML CSS JS</h2>
                <button className="whitespace-nowrap sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2" onClick={handleOpen}>Clickeame!</button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>HTML: Se las etiquetas basicas para formar cualquier pagina web</li>
                        <li>CSS: Tengo buen manejo de CSS artesanal, por eso decidi usar TailwindCSS de framework, por su similitud en CSS puro.</li>
                        <li>JavaScript: <span className="block">-JS para el FrontEnd</span> <span className="block">-JS para el BackEnd</span></li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col">
              <div className="w-full">
                <img src={img02} alt="" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 relative sm:left-6 sm:top-6 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2">React.JS</h2>
                <button className="sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2" onClick={handleOpen1}>Clickeame!</button>
                <Modal
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>- Componentes</li>
                        <li>- React Context</li>
                        <li>- React Redux</li>
                        <li>- React Icons</li>
                        <li>- Material UI : Lo estoy empezando a implementar</li>
                        <li>- Manejo de API</li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col">
              <div className="w-full">
                <img src={img03} alt="" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 relative sm:left-6 sm:top-6 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2">Node.JS/</h2>
                <h2 className="text-white font-semibold ml-2 -mt-2 relative sm:left-6 sm:top-6 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/4">Express</h2>
                <button className="whitespace-nowrap sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2" onClick={handleOpen2}>Clickeame!</button>
                <Modal
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>- Express</li>
                        <li>- Menejo de librerias como Yarn para aplicaciones de consola</li>
                        <li>- Menejo de librerias como mongoose para MongoDB</li>
                        <li>- Funciones Middlware</li>
                        <li>- REST FULL API</li>
                        <li>- JWS</li>
                        <li>- Google Autentication</li>
                        <li>- Sockets Proximamente...</li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col">
              <div className="w-full bg-white lg:bg-slate-600 py-2">
                <img src={img04} alt="" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 relative sm:left-6 sm:top-6 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2">Docker</h2>
                <button className="whitespace-nowrap sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2" onClick={handleOpen2}>Clickeame!</button>
                <Modal
                  open={open3}
                  onClose={handleClose3}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <h2 className="text-sm font-semibold">Recien estoy comenzando</h2>
                      <ul>
                        <li>- Crear Contenedores, imagenes, ver logs</li>
                        <li>- Volumenes y Redes</li>
                        <li>- Multicontainer app , Docker Compose</li>
                        <li>- Docker File</li>
                        <li>- Docker Build</li>
                        <li>- Kubernets proximamente...</li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col">
              <div className="">
                <img src={img05} alt="" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 relative sm:left-6 sm:top-6 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2">GitHub</h2>
                <button className="whitespace-nowrap sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2" onClick={handleOpen2}>Clickeame!</button>
                <Modal
                  open={open4}
                  onClose={handleClose4}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <h2 className="text-sm font-semibold">No tengo mucha practica mas que crear y repetir los comandos basicos para subir un repositorio, si bien aprendi muchas cosas pero no uso todo.</h2>
                      <ul>
                        <li>- Configuracion</li>
                        <li>- Inicializar Git</li>
                        <li>- git add,commit,push,origin,remote,logs,--amend --no-edit</li>
                        <li>- Ignorar archivos</li>
                        <li>- Clonar archivos</li>
                        <li>- Menejo de Ramas</li>
                        <li>- Fusion de Ramas</li>
                        <li>- Registro de historial con git log</li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col">
              <div className="w-full h-full overflow-hidden">
                <img src={img06} className="w-full h-auto" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 relative sm:left-6 sm:top-6 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2">TailwindCSS</h2>
                <button className="whitespace-nowrap sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2" onClick={handleOpen2}>Clickeame!</button>
                <Modal
                  open={open5}
                  onClose={handleClose5}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>- Menejo de Estilos como las configuraciones</li>
                        <li>- A su vez me gusta por su facilidad para hacer movil-first</li>
                        <li>- Algo mas que destaco es lo personal que doy estilos, al saber que es lo que estoy haciendo con exactitud.</li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col">
              <div className="w-full h-full overflow-hidden">
                <img src={img07} className="w-full h-auto" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 relative sm:left-6 sm:top-6 lg:absolute lg:left-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2">Bootstrap</h2>
                <button className="whitespace-nowrap sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2" onClick={handleOpen2}>Clickeame!</button>
                <Modal
                  open={open6}
                  onClose={handleClose6}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <h2 className="text-sm font-semibold">No practico boostrap por cuestion de que me gusto mas TailwindCSS, pero si lo estudie vi toda la documentacion y lo he practicado, no me costaria ponerme al dia en el manejo de Boostrap.</h2>
                      <ul>
                        <li>- Estilos como la configuracion por CDN</li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-white relative overflow-hidden" style={height}>
            <article className="flex flex-col w-full">
              <div className="w-full h-full">
                <img src={img08} className="w-full h-auto" />
              </div>
              <div className="ml-3">
                <h2 className="text-white font-semibold ml-2 relative sm:left-6 sm:top-6 md:text-slate-950 lg:absolute lg:left-2/3  lg:translate-x-1/2 lg:translate-y-1/2 lg:text-slate-950 lg:font-bold">MySQL</h2>
                <button className="whitespace-nowrap sm:absolute sm:top-0 text-white font-bold sm:bg-blue-900 sm:px-2 " onClick={handleOpen2}>Clickeame!</button>
                <Modal
                  open={open8}
                  onClose={handleClose8}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Que es lo que se?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>- MySQL fue de lo primero que estudie. Tengo conocimientos avanzandos en MySQL en sus comandos, Subconsultas, Procesamientos, Disparadores.</li>
                      </ul>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </section >
    </>
  );
};


export default Skills