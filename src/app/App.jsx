import React from 'react'
import HeroSection from '../components/HeroSection'
import WhenToSeek from '../components/WhenToSeek'
import Topbar from '../components/Topbar'
import About from '../components/About'
import Conditions from '../components/Conditions'
import Specialization from '../components/Specialization/Specialization'
import Footer from '../components/Footer'
import InterSectionDivider from '../components/InterSectionDivider'

const App = () => {
    return (
        <div className="max-w-screen min-h-screen overflow-x-hidden bg-[rgb(250,255,255)] ">
            <Topbar />
            <HeroSection />
            <WhenToSeek />
           
            <Conditions />
            <InterSectionDivider />
             <About />
            <Specialization />

            <Footer />

        </div>

    )
}

export default App