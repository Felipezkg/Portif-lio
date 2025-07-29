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
      <section ref={homeRef} className='bg-[#f5f5f5] dark:bg-[#141C26] min-h-screen flex flex-col items-center justify-center pt-24 md:pt-0'>
        {/* Navbar Fixa */}
        <div className='fixed top-0 left-0 w-full h-24 bg-[#141C26] dark:bg-[#f5f5f5] flex items-center justify-between px-4 md:px-8 lg:px-12 z-50'>
          <PiCode className='w-12 h-12 md:w-16 md:h-16 fill-white dark:fill-black' />
          <span className='text-3xl md:text-5xl font-[Tilt_Neon] text-white dark:text-black'>Luiz Felipe</span>

          {/* Menu de Navegação - Desktop */}
          <nav className='hidden md:flex gap-4 lg:gap-8 font-[Tilt_Neon] text-base lg:text-lg text-white dark:text-black'>
            <span onClick={() => scrollToSection(homeRef)} className='flex items-center justify-center w-24 md:w-32 h-10 px-2 rounded-md cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:text-[#141C26] dark:hover:text-[#e0e0e0] transition-colors'>Home</span>
            <span onClick={() => scrollToSection(sobreRef)} className='flex items-center justify-center w-24 md:w-32 h-10 px-2 rounded-md cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:text-[#141C26] dark:hover:text-[#e0e0e0] transition-colors'>Sobre</span>
            <span onClick={() => scrollToSection(tecnoRef)} className='flex items-center justify-center w-24 md:w-32 h-10 px-2 rounded-md cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:text-[#141C26] dark:hover:text-[#e0e0e0] transition-colors'>Tecnologias</span>
            <span onClick={() => scrollToSection(projetosRef)} className='flex items-center justify-center w-24 md:w-32 h-10 px-2 rounded-md cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:text-[#141C26] dark:hover:text-[#e0e0e0] transition-colors'>Projetos</span>
            <span onClick={() => scrollToSection(expeRef)} className='flex items-center justify-center w-24 md:w-32 h-10 px-2 rounded-md cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-[#141C26] hover:text-[#141C26] dark:hover:text-[#e0e0e0] transition-colors'>Experiências</span>
          </nav>

          {/* Botão de tema */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {theme === 'light' ? (
              <PiSunBold className="w-6 h-6 fill-[#ebebfd] dark:fill-[#585e68] " />
            ) : (
              <PiMoonBold className="w-6 h-6 fill-[#ebebfd] dark:fill-[#585e68]" />
            )}
          </button>
        </div>

        {/* Conteúdo Principal (Olá, Eu sou um Programador) */}
        <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-0 mt-8 md:mt-0'>
          <div className='flex flex-col max-w-lg md:max-w-xl lg:max-w-2xl'>
            <span className='text-lg md:text-xl font-[Tilt_Neon] text-black dark:text-white mb-2'>Olá Pessoas</span>
            <span className='text-4xl md:text-5xl lg:text-6xl font-[Tilt_Neon] text-black dark:text-white leading-tight'>EU SOU UM</span>
            <span className='text-4xl md:text-5xl lg:text-6xl font-[Tilt_Neon] text-black dark:text-white leading-tight'>PROGRAMADOR</span>
            <span className='text-sm md:text-base font-[Tilt_Neon] text-black dark:text-white mt-4'>Seja bem-vindo ao meu portfólio</span>

            <div className='flex justify-center md:justify-start'>
              <span onClick={() => scrollToSection(sobreRef)} className='flex w-full max-w-xs md:max-w-sm h-12 rounded-lg text-base md:text-lg items-center justify-center bg-[#141C26] dark:bg-[#f5f5f5] font-[Tilt_Neon] text-white dark:text-black cursor-pointer mt-8 hover:bg-[#55585d] dark:hover:bg-[#989797] transition-colors'>Saiba mais sobre mim</span>
            </div>
          </div>

          <div className='flex justify-center items-center mt-8 md:mt-0 md:ml-8'>
            <img src={Prog} className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain' alt="Programador" />
          </div>
        </div>

        {/* Ícones Sociais */}
        <div className='flex gap-4 mt-8 md:mt-16'>
          <a href="https://github.com/Felipezkg" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className='w-10 h-10 md:w-12 md:h-12 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#55585d] dark:hover:fill-[#989797] transition-colors' />
          </a>
          <a href="https://www.linkedin.com/in/luiz-felipe-de-souza-alieve-7a9377171/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='w-10 h-10 md:w-12 md:h-12 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#55585d] dark:hover:fill-[#989797] transition-colors' />
          </a>
        </div>
      </section>
      <section ref={sobreRef} className='bg-[#f5f5f5] dark:bg-[#141C26] min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12'>
        <div className='flex flex-col items-center text-center max-w-4xl'> {/* Adicionado max-w-4xl para controlar a largura do texto em telas grandes */}
          <img src={Avatar} className='w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-gray-400 mb-8 md:mb-12' alt="Avatar" />
          <span className='text-4xl md:text-5xl font-[Tilt_Neon] text-black dark:text-white mb-4'>Luiz Felipe</span>
          <span className='text-base md:text-lg lg:text-xl font-[Tilt_Neon] text-black dark:text-white leading-relaxed'>Meu nome é Luiz Felipe de Souza Alieve, sou do Brasil, São José/SC.</span>
          <span className='text-base md:text-lg lg:text-xl font-[Tilt_Neon] text-black dark:text-white leading-relaxed mt-2'>Sou formado como Técnico em Desenvolvimento de Sistemas pelo Senai de São José.</span>
          <span className='text-base md:text-lg lg:text-xl font-[Tilt_Neon] text-black dark:text-white leading-relaxed mt-2'>Sou viciado em leitura e estou sempre procurando novos desafios.</span>
        </div>
      </section>
      <section ref={tecnoRef} className='bg-[#f5f5f5] dark:bg-[#141C26] min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12'>
        <div className='flex flex-col items-center text-center'>
          <span className='text-5xl md:text-6xl font-[Tilt_Neon] text-black dark:text-white mb-8 md:mb-12'>Minhas Tecnologias</span>
          <div className='flex flex-col items-center'>
            {/* Front-end */}
            <div className='flex flex-col items-center mt-8 md:mt-12'>
              <span className='text-3xl md:text-4xl font-[Tilt_Neon] text-black dark:text-white mb-6'>Front-end</span>
              <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8'> {/* Usado flex-wrap para quebrar linha em telas pequenas */}
                <IoLogoJavascript className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#F0DB4F] dark:hover:fill-[#F0DB4F]' />
                <IoLogoHtml5 className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#D9411E] dark:hover:fill-[#D9411E]' />
                <IoLogoCss3 className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#048ABF] dark:hover:fill-[#048ABF]' />
                <IoLogoReact className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#31A8FF] dark:hover:fill-[#31A8FF]' />
                <RiTailwindCssFill className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#27BABD] dark:hover:fill-[#27BABD]' />
              </div>
            </div>
            {/* Back-end */}
            <div className='flex flex-col items-center mt-12 md:mt-16'>
              <span className='text-3xl md:text-4xl font-[Tilt_Neon] text-black dark:text-white mb-6'>Back-end</span>
              <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8'>
                <IoLogoNodejs className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#8BD93D] dark:hover:fill-[#8BD93D]' />
                <DiMongodb className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#12924F] dark:hover:fill-[#12924F]' />
                <IoLogoFirebase className='w-16 h-16 md:w-20 md:h-20 fill-[#141C26] dark:fill-[#f5f5f5] cursor-pointer hover:fill-[#FFA50E] dark:hover:fill-[#FFA50E]' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={projetosRef} className='bg-[#f5f5f5] dark:bg-[#141C26] min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12'>
        <div className='flex flex-col items-center gap-8 md:gap-12 w-full'> {/* Usado w-full para ocupr a largura e gap responsivo */}
          <div className='text-center'>
            <span className='text-5xl md:text-6xl font-[Tilt_Neon] text-black dark:text-white'>Meus Projetos</span> {/* Título ajustado */}
          </div>
          <div className='flex flex-col items-center w-full'> {/* w-full para o container dos cards */}
            {projects.map(project => (
              <ProjectCard
                key={project.projectID}
                title={project.title}
                description={project.description}
                cape={project.cape}
                images={project.images}
                techs={project.techs}
              // Adicione classes responsivas ao ProjectCard se ele não tiver
              // Por exemplo: className="w-full md:w-3/4 lg:w-2/3" ou estilos internos
              />
            ))}
          </div>
        </div>
      </section>
      <section ref={expeRef} className='bg-[#f5f5f5] dark:bg-[#141C26] min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12'>
        <div className='flex flex-col items-center gap-8 md:gap-12 w-full'>
          <div className='flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 items-center text-center md:text-right'>
            <div className='flex flex-col'>
              <span className='text-base md:text-lg font-[Tilt_Neon] text-black dark:text-white'>Minha jornada está apenas</span>
              <span className='text-base md:text-lg font-[Tilt_Neon] text-black dark:text-white'>começando, mas sempre aprendendo</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-4xl md:text-5xl font-[Tilt_Neon] text-black dark:text-white'>Experiência</span>
              <span className='text-4xl md:text-5xl font-[Tilt_Neon] text-black dark:text-white'>Profissional</span>
            </div>
          </div>

          <div className='flex flex-col w-full max-w-xs md:max-w-md h-auto p-6 bg-[#141C26] dark:bg-[#f5f5f5] rounded-3xl items-center justify-center text-center cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105'>
            <span className='text-lg md:text-xl font-[Tilt_Neon] text-white dark:text-black mb-2'>Analista de Suporte Técnico</span>
            <span className='text-sm md:text-base font-[Tilt_Neon] text-white dark:text-black mb-2'>Maxpan Tech</span>
            <span className='text-xs md:text-sm font-[Tilt_Neon] text-white dark:text-black p-1'>Fornecer atendimento ao cliente e ajudar na resolução dos problemas, utilizando dos conhecimentos adquiridos no dia-a-dia.</span>
          </div>
        </div>
      </section>
    </div>

  )
}

