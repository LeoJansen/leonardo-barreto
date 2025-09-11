import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#145251]  p-3'>
            <div className="container mx-auto text-center flex flex-col items-center justify-center gap-2">
                <div className='flex items-center gap-2'>
                    <Image
                        width={48}
                        height={48}
                        src="/assets/logobranco.svg"
                        alt="Leonardo Barreto"
                        className="h-14 w-14 filter opacity-80"
                    />
                    <div className='flex flex-col h-full items-center justify-center opacity-80'>
                       
                        <span className="text-[12px] font-[500]  text-[#DBE8E8] tracking-wide">LEONARDO BARRETO</span>
                        <span className="text-[10px] text-[#878f8f] leading-2">PSIQUIATRIA</span>
                    </div>


                </div>

                <p className="text-[10px] font-extralight mt-2 text-[#bbbbbb]">© 2025 Leonardo Barreto. Todos os direitos reservados.</p>
                <div className='w-full flex flex-col items-end justify-center mt-2'>
                    <p className="text-[10px] font-extralight leading-3 text-[#9c9c9c]">Desenvolvido por</p>
                    <a className="text-[11px] font-light leading-3 text-[#bbbbbb]" href='https://www.leonardojansen.com'>www.leonardojansen.com</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer