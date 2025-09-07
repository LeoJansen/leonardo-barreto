import React from 'react'
import HeroSection from '../components/HeroSection'
import WhenToSeek from '../components/WhenToSeek'
import Topbar from '../components/Topbar'
import About from '../components/About'

const App = () => {
    return (
        <div className="max-w-screen min-h-screen">
            <Topbar />
            <HeroSection />
            <WhenToSeek />
            <About />
        </div>

    )
}

export default App