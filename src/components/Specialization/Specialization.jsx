import Art from './components/Art';

function Specialization() {


    return (
        <section>
            <div className='   flex flex-col w-full items-start justify-center bg-[#1C7A79] p-2 py-5'>
                {/* Título da seção */}
                <h2 className="text-[25px] tracking-[-0.008em] leading-3 text-[#919696] font-light">
                    Especialização em
                </h2>
                <h2 className="text-[50px] tracking-[-0.08em] font-normal leading-14 text-[#f2fffd]">
                    PSIQUIATRIA
                </h2>
            </div>

            <Art />
            <div className='   flex flex-col w-full items-end justify-center bg-[#ffffff] p-2 py-5'>
                {/* Título da seção */}
                <h2 className="text-[25px] tracking-[-0.008em] leading-3 text-[#1C7A79] font-light">
                    pelo Hospital                </h2>
                <h2 className="text-[50px] tracking-[-0.08em] font-light leading-14 text-[#1C7A79]">
                    Albert Einstein
                </h2>
            </div>

        </section>
    );
}

export default Specialization;