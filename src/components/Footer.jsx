import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE } from '../contants/index.js'
import CookieSettingsButton from './CookieSettingsButton'

const Footer = () => {
    const whatsappHref = `https://wa.me/${WHATSAPP_PHONE.replace(/\D+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <footer className="dark-surface bg-brand-primary text-on-brand">
            <section id="contato" aria-labelledby="contact-heading" className="scroll-mt-24 border-b border-white/10 bg-brand-deep px-5 py-14 text-center sm:px-8 sm:py-16">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-on-dark sm:text-sm">Próximo passo</p>
                    <h2 id="contact-heading" className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-on-brand sm:text-4xl">
                        Vamos conversar sobre o seu cuidado?
                    </h2>
                    <p className="max-w-2xl text-sm leading-6 text-on-brand-muted sm:text-base sm:leading-7">
                        Se quiser saber mais sobre as consultas ou verificar disponibilidade, envie uma mensagem pelo WhatsApp.
                    </p>
                    <Link
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-on-dark px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep"
                    >
                        Enviar mensagem pelo WhatsApp
                        <span className="sr-only"> (abre em nova aba pelo WhatsApp)</span>
                    </Link>
                </div>
            </section>

            <div className="container mx-auto flex flex-col items-center justify-center gap-2 p-5 text-center">
                <div className='flex items-center gap-2'>
                    <Image
                        width={48}
                        height={48}
                        src="/assets/logobranco.svg"
                        alt=""
                        className="h-14 w-14 filter opacity-80"
                    />
                    <div className="flex h-full flex-col items-center justify-center">
                       <div className='flex gap-1 items-center'>
                        <span className="text-xs tracking-wide text-on-brand">Dr.</span>
                        <span className="text-sm font-medium tracking-wide text-on-brand">Leonardo Barreto</span>

                       </div>
                        
                        <span className="text-xs leading-tight text-on-brand-muted">Saúde Mental</span>
                    </div>


                </div>

                <p className="mt-2 text-xs font-light text-on-brand-muted">© {new Date().getFullYear()} Leonardo Barreto. Todos os direitos reservados.</p>
                <nav aria-label="Informações legais" className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                    <Link className="inline-flex min-h-11 items-center text-sm text-on-brand-muted underline underline-offset-4 transition hover:text-on-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark" href="/politica-de-privacidade">
                        Política de Privacidade
                    </Link>
                    <Link className="inline-flex min-h-11 items-center text-sm text-on-brand-muted underline underline-offset-4 transition hover:text-on-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark" href="/politica-de-cookies">
                        Política de Cookies
                    </Link>
                    <Link className="inline-flex min-h-11 items-center text-sm text-on-brand-muted underline underline-offset-4 transition hover:text-on-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark" href="/termos-de-uso">
                        Termos de Uso
                    </Link>
                    <CookieSettingsButton />
                </nav>
                <div className="mt-2 flex w-full flex-col items-end justify-center">
                    <p className="text-xs font-light leading-4 text-on-brand-muted">Desenvolvido por</p>
                    <a className="inline-flex min-h-11 items-center text-xs font-light leading-4 text-on-brand underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-on-dark" href="https://www.leonardojansen.com">www.leonardojansen.com</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
