import { useEffect, useState, useRef } from "react";

import Prog from './Assets/programador.png'

import Avatar from './Assets/perfil.jpg'

import { PiCode, PiSunBold, PiMoonBold } from "react-icons/pi";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoNodejs, IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

import { ProjectCard } from "./_component/projectCard";

export default function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const homeRef = useRef(null);
  const sobreRef = useRef(null);
  const tecnoRef = useRef(null);
  const projetosRef = useRef(null);
  const expeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      projectID: 1,
      title: 'Portifólio',
      description: 'Meu portifólio utilizando ViteJS',
      cape: 'https://i.imgur.com/SX3CM3h.png',
      images: [],
      techs: ['React', 'Javascript', 'HTML', 'TailwindCSS'],
    }
  ]



  return (
    <div>
      <section ref={homeRef} className='bg-[#f5f5f5] dark:bg-[#141C26] w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='w-[100vw] h-[100px] bg-[#141C26] dark:bg-[#f5f5f5] flex items-center gap-[50px] justify-evenly top-0 fixed'>
          <PiCode className='w-[70px] h-[70px] fill-white dark:fill-black' />
          <span className='text-[50px] font-[Tilt_Neon] text-white dark:text-black'>Luiz Felipe</span>
          <div className='flex gap-[50px] font-[Tilt_Neon] text-[18px] text-white dark:text-black'>
            <span onClick={() => scrollToSection(homeRef)} className='flex w-[130px] h-[40px] hover:text-[#141C26] dark:hover:text-[#e0e0e0] text-white dark:text-black cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Home</span>
            <span onClick={() => scrollToSection(sobreRef)} className='flex w-[130px] h-[40px] hover:text-[#141C26] dark:hover:text-[#e0e0e0] text-white dark:text-black cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Sobre</span>
            <span onClick={() => scrollToSection(tecnoRef)} className='flex w-[130px] h-[40px] hover:text-[#141C26] dark:hover:text-[#e0e0e0] text-white dark:text-black cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Tecnologias</span>
            <span onClick={() => scrollToSection(projetosRef)} className='flex w-[130px] h-[40px] hover:text-[#141C26] dark:hover:text-[#e0e0e0] text-white dark:text-black cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Projetos</span>
            <span onClick={() => scrollToSection(expeRef)} className='flex w-[130px] h-[40px] hover:text-[#141C26] dark:hover:text-[#e0e0e0] text-white dark:text-black cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Experiências</span>
          </div>
          <button
            onClick={toggleTheme}
            className="border-1 border-gray-700 w-[30px] h-[30px] rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {theme === 'light' ? (
              <PiSunBold className="w-6 h-6 transition-transform duration-300 rotate-0 fill-[#ebebfd] dark:fill-[#585e68] " />
            ) : (
              <PiMoonBold className="w-6 h-6 transition-transform duration-300 rotate-240 fill-[#ebebfd] dark:fill-[#585e68]" />
            )}
          </button>
        </div>
        <div className='flex items-center justify-center' >
          <div className='flex flex-col w-[600px]'>
            <span className='text-[20px] font-[Tilt_Neon] text-black dark:text-white'>Olá Pessoas</span>
            <span className='text-[50px] font-[Tilt_Neon] text-black dark:text-white'>EU SOU UM</span>
            <span className='text-[50px] font-[Tilt_Neon] text-black dark:text-white'>PROGRAMADOR</span>
            <span className='text-[15px] font-[Tilt_Neon] text-black dark:text-white'>Seja bem-vindo ao meu portifólio</span>
            <div className='flex flex-col'>
              <span onClick={() => scrollToSection(sobreRef)} className='flex w-[300px] h-[50px] rounded-[10px] text-[18px] items-center justify-center bg-[#141C26] dark:bg-[#f5f5f5] font-[Tilt_Neon] text-white dark:text-black cursor-pointer mt-[50px] hover:bg-[#55585d] dark:hover:bg-[#989797]'>Saiba mais sobre mim</span>
              <div>

              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src={Prog} className='w-[650px] h-[650px]' />
          </div>
        </div>
        <div className='flex gap-5 mt-[100px]'>
          <a href="https://github.com/Felipezkg" target="_blank"><FaGithubSquare className='w-[50px] h-[50px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#55585d] dark:hover:fill-[#989797]' /></a>
          <a href="https://www.linkedin.com/in/luiz-felipe-de-souza-alieve-7a9377171/" target="_blank"><FaLinkedin href="https://www.linkedin.com/in/luiz-felipe-de-souza-alieve-7a9377171/" className='w-[50px] h-[50px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#55585d] dark:hover:fill-[#989797]' /></a>
        </div>
      </section>
      <section ref={sobreRef} className='bg-[#f5f5f5] dark:bg-[#141C26] w-[100vw] h-[100vh] flex items-center justify-center pt[100px]'>
        <div className='flex flex-col top-5 items-center'>
          <img src={Avatar} className='w-[250px] h-[250px] rounded-full border-3 mb-[40px]' />
          <span className='text-[50px] font-[Tilt_Neon] text-black dark:text-white'>Luiz Felipe</span>
          <span className='text-[20px] font-[Tilt_Neon] text-black dark:text-white'>Meu nome é Luiz Felipe de Souza Alieve, sou do Brasil, São José/SC</span>
          <span className='text-[20px] font-[Tilt_Neon] text-black dark:text-white'>Sou formado como Técnico em Desenvolvimento de Sistemas pelo Senai de São José</span>
          <span className='text-[20px] font-[Tilt_Neon] text-black dark:text-white'>Sou viciado em leitura e estou sempre procurando novos desafios</span>
        </div>
      </section>
      <section ref={tecnoRef} className='bg-[#f5f5f5] dark:bg-[#141C26] w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='flex flex-col top-5 items-center'>
          <span className='text-[60px] font-[Tilt_Neon] text-black dark:text-white'>Minhas Tecnologias</span>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col mt-[50px] items-center'>
              <span className='text-[40px] font-[Tilt_Neon] text-black dark:text-white'>Front-end</span>
              <div className='flex gap-5 mt-[30px]'>
                <IoLogoJavascript className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#F0DB4F] dark:hover:fill-[#F0DB4F]' />
                <IoLogoHtml5 className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#D9411E] dark:hover:fill-[#D9411E]' />
                <IoLogoCss3 className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#048ABF] dark:hover:fill-[#048ABF]' />
                <IoLogoReact className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#31A8FF] dark:hover:fill-[#31A8FF]' />
                <RiTailwindCssFill className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#27BABD] dark:hover:fill-[#27BABD]' />
              </div>
            </div>
            <div className='flex flex-col mt-[50px] items-center'>
              <span className='text-[40px] font-[Tilt_Neon] text-black dark:text-white'>Back-end</span>
              <div className='flex gap-5 mt-[30px]'>
                <IoLogoNodejs className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#8BD93D] dark:hover:fill-[#8BD93D]' />
                <DiMongodb className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#12924F] dark:hover:fill-[#12924F]' />
                <IoLogoFirebase className='w-[80px] h-[80px] fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#FFA50E] dark:hover:fill-[#FFA50E]' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={projetosRef} className='bg-[#f5f5f5] dark:bg-[#141C26] w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='flex flex-col gap-[100px]'>
          <div className='flex justify-center'>
            <span className='text-[60px] font-[Tilt_Neon] text-black dark:text-white'>Minhas Tecnologias</span>
          </div>
          <div className='flex flex-col top-5 items-center'>
            {projects.map(project => (
              <ProjectCard
                key={project.projectID}
                title={project.title}
                description={project.description}
                cape={project.cape}
                images={project.images}
                techs={project.techs}
              />
            ))}
          </div>
        </div>
      </section>
      <section ref={expeRef} className='bg-[#f5f5f5] dark:bg-[#141C26] w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='flex flex-col gap-[50px] top-5 items-center'>
          <div className='flex gap-10'>
            <div className='flex flex-col justify-end p-2'>
              <span className='text-[18px] font-[Tilt_Neon] text-black dark:text-white flex justify-end'>Minha jornada está apenas</span>
              <span className='text-[18px] font-[Tilt_Neon] text-black dark:text-white'>começando, mas sempre aprendendo</span>
            </div>
            <div className='flex flex-col '>
              <span className='text-[40px] font-[Tilt_Neon] text-black dark:text-white'>Experiência</span>
              <span className='text-[40px] font-[Tilt_Neon] text-black dark:text-white'>Profissional</span>
            </div>
          </div>
          <div className='flex flex-col w-[350px] h-[150px] bg-[#141C26] dark:bg-[#f5f5f5] rounded-[30px] mt-[50px] items-center justify-center text-center cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110s '>
            <span className='text-[18px] font-[Tilt_Neon] text-white dark:text-black'>Analista de Suporte Técnico</span>
            <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black'>Maxpan Tech</span>
            <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black p-3'>Fornecer atendimento ao cliente e ajudar na resolução dos problemas, utilizando dos conhecimentos adquiridos no dia-a-dia.</span>
          </div>
        </div>
      </section>
    </div>

  )
}

