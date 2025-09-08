import React from 'react'
import HeroSection from '../components/HeroSection'
import WhenToSeek from '../components/WhenToSeek'
import Topbar from '../components/Topbar'
import About from '../components/About'
import Conditions from '../components/Conditions'
import Specialization from '../components/Specialization'
import Footer from '../components/Footer'

const App = () => {
    return (
        <div className="max-w-screen min-h-screen">
            <Topbar />
            <HeroSection />
            <WhenToSeek />
            <About />
            <Conditions />
            <Specialization />
            <Footer />
        </div>

    )
}

export default App