import React from 'react'
import HeroSection from '../components/HeroSection'
import WhenToSeek from '../components/WhenToSeek'
import Topbar from '../components/Topbar'
import About from '../components/About'
import Conditions from '../components/Conditions'
import Specialization from '../components/Specialization/Specialization'
import DoctoraliaBooking from '../components/DoctoraliaBooking'
import Footer from '../components/Footer'
import InterSectionDivider from '../components/InterSectionDivider'

const App = () => {
    return (
        <div className="max-w-screen min-h-screen overflow-x-hidden bg-surface">
            <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo principal</a>
            <Topbar />
            <main id="conteudo-principal" tabIndex={-1} className="focus:outline-none">
                <HeroSection />
                <About />
                <WhenToSeek />
                <Conditions />
                <InterSectionDivider />
                <Specialization />
                <DoctoraliaBooking />
            </main>
            <Footer />

        </div>

    )
}

export default App
