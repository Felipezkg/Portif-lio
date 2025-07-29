


export function ProjectCard({ title, description, cape, images, techs }) {
  return (
    <div className="
        flex flex-col
        w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
        h-auto
        rounded-lg
        shadow-xl
        cursor-pointer
        overflow-hidden /* Garante que a imagem e o conteúdo respeitem os cantos arredondados */
        transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] /* Ajustei um pouco o scale para evitar quebras em transições */
        my-4 /* Adiciona uma margem vertical para separar os cards */
    ">
      <img
        src={cape}
        alt={title}
        className="
            w-full /* Ocupa 100% da largura do card */
            h-48 md:h-56 lg:h-64 /* Altura responsiva para a imagem */
            object-cover
            rounded-t-lg /* Apenas os cantos superiores */
        "
      />
      <div className='
          flex flex-col items-center justify-center
          bg-[#141C26] dark:bg-[#f5f5f5]
          p-4 /* Padding para o conteúdo */
          h-auto /* Altura automática para o container de texto */
          rounded-b-lg /* Apenas os cantos inferiores */
          gap-2 md:gap-3
      '>
        <span className='text-lg md:text-xl font-[Tilt_Neon] text-white dark:text-black text-center'>{title}</span>
        <span className='text-sm md:text-base font-[Tilt_Neon] text-white dark:text-black text-center mb-2'>{description}</span>
        
        <div className='flex flex-wrap justify-center gap-2 md:gap-3 mt-2'> {/* flex-wrap para as tags de tecnologia */}
          {techs.map((tech, index) => (
            <span
              key={index}
              className={`
                text-xs md:text-sm font-[Tilt_Neon] text-white dark:text-black
                border border-white dark:border-black rounded-full px-3 py-1
                hover:border-transparent /* Remover a borda no hover para a cor ser mais visível */
                transition-colors duration-200
                ${tech === 'React' ? 'hover:bg-[#31A8FF] dark:hover:bg-[#31A8FF]' : ''}
                ${tech === 'Javascript' ? 'hover:bg-[#F0DB4F] dark:hover:bg-[#F0DB4F] hover:text-[#141C26] dark:hover:text-[#141C26]' : ''}
                ${tech === 'HTML' ? 'hover:bg-[#D9411E] dark:hover:bg-[#D9411E]' : ''}
                ${tech === 'TailwindCSS' ? 'hover:bg-[#27BABD] dark:hover:bg-[#27BABD]' : ''}
                ${tech === 'CSS' ? 'hover:bg-[#048ABF] dark:hover:bg-[#048ABF]' : ''}
                /* Adicione mais condições conforme as tecnologias que você tem */
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}