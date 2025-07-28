


export function ProjectCard({ title, description, cape, images, techs }) {
    return (
        <div className="flex flex-col w-[380px] h-[350px]  rounded-tl-lg rounded-tr-lg  shadow-xl  cursor-pointer rounded-bl-lg rounded-br-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110s ">
            <img src={cape} alt={title} className="w-[390px] h-[250px] object-cover rounded-tl-lg rounded-tr-lg " />
            <div className='flex flex-col items-center justify-center bg-[#141C26] dark:bg-[#f5f5f5] h-[130px] rounded-bl-lg rounded-br-lg gap-2'>
                <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black'>{title}</span>
                <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black'>{description}</span>
                <div className='flex gap-5 items-center justify-center'>
                    <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black hover:text-[#31A8FF] border-1 rounded-full p-1'>{techs[0]}</span>
                    <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black hover:text-[#F0DB4F] border-1 rounded-full p-1'>{techs[1]}</span>
                    <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black hover:text-[#D9411E] border-1 rounded-full p-1'>{techs[2]}</span>
                    <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black hover:text-[#27BABD] border-1 rounded-full p-1'>{techs[3]}</span>
                    <span className='text-[15px] font-[Tilt_Neon] text-white dark:text-black'>{techs[4]}</span>
                </div>
            </div>
        </div>
    )
}