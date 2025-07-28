import { useRef } from "react"


export default function Menu() {

    const homeRef = useRef(null);
    const sobreRef = useRef(null);
    const tecnoRef = useRef(null);
    const projetosRef = useRef(null);
    const expeRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className='flex'>
            <div className='flex flex-col gap-[20px] font-[Tilt_Neon] text-[18px] text-white dark:text-black w-[150px]'>
                <span onClick={() => scrollToSection(homeRef)} className='flex w-[130px] h-[40px] hover:text-[#e0e0e0] dark:hover:text-[#141C26] text-black dark:text-white cursor-pointer hover:bg-[#141C26] dark:hover:bg-[#e0e0e0] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Home</span>
                <span onClick={() => scrollToSection(sobreRef)} className='flex w-[130px] h-[40px] hover:text-[#e0e0e0] dark:hover:text-[#141C26] text-black dark:text-white cursor-pointer hover:bg-[#141C26] dark:hover:bg-[#e0e0e0] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Sobre</span>
                <span onClick={() => scrollToSection(tecnoRef)} className='flex w-[130px] h-[40px] hover:text-[#e0e0e0] dark:hover:text-[#141C26] text-black dark:text-white cursor-pointer hover:bg-[#141C26] dark:hover:bg-[#e0e0e0] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Tecnologias</span>
                <span onClick={() => scrollToSection(projetosRef)} className='flex w-[130px] h-[40px] hover:text-[#e0e0e0] dark:hover:text-[#141C26] text-black dark:text-white cursor-pointer hover:bg-[#141C26] dark:hover:bg-[#e0e0e0] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Projetos</span>
                <span onClick={() => scrollToSection(expeRef)} className='flex w-[130px] h-[40px] hover:text-[#e0e0e0] dark:hover:text-[#141C26] text-black dark:text-white cursor-pointer hover:bg-[#141C26] dark:hover:bg-[#e0e0e0] hover:rounded-[5px] hover:w-[130px] text-center justify-center items-center'>Experiências</span>
            </div>
        </div>
    )
}