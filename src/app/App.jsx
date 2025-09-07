import React from 'react'
import HeroSection from '../components/HeroSection'
import WhenToSeek from '../components/WhenToSeek'
import Topbar from '../components/Topbar'
import About from '../components/About'
import Conditions from '../components/Conditions'

const App = () => {
    return (
        <div className="max-w-screen min-h-screen">
            <Topbar />
            <HeroSection />
            <WhenToSeek />
            <About />
            <Conditions />
        </div>

    )
}

export default App