import Art from './components/Art';

function Specialization() {


    return (
        <section>
            <div className=' flex w-full items-center justify-center my-10  '>
                <div className='flex flex-col bg-[#025C5C]  p-5 px-10 rounded-r-2xl z-20'>
                    {/* Título da seção */}
                    <h2 className="text-[23px] xl:text-[25px] tracking-[-0.008em] leading-3 xl:leading-8 text-[#29B8B4] font-extralight">
                        Especialização em
                    </h2>
                    <h2 className="text-[40px] xl:text-[55px] tracking-[-0.08em] font-light leading-14 text-[#f2fffd]">
                        PSIQUIATRIA
                    </h2>
                </div>
                <div className='flex w-full' />

            </div>

            <Art />



            <div className='flex flex-col w-full items-end justify-center bg-[#ffffff] p-5  py-8 xl:p-8  xl:pb-10 z-20'>
                {/* Título da seção */}
                <h2 className="text-[25px] xl:text-[30px] tracking-[-0.0678em] leading-3 xl:leading-6 text-[#0F3D3B] font-light">
                    pelo Hospital                </h2>
                <h2 className="text-[50px] xl:text-[60px] tracking-[-0.08em] font-light leading-14 text-[#1C7A79]">
                    Albert Einstein
                </h2>
            </div>


        </section>
    );
}

export default Specialization;