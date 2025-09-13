import React from 'react'
import HeroSection from '../components/HeroSection'
import WhenToSeek from '../components/WhenToSeek'
import Topbar from '../components/Topbar'
import About from '../components/About'
import Conditions from '../components/Conditions'
import Specialization from '../components/Specialization/Specialization'
import Footer from '../components/Footer'
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import InterSectionDivider from '../components/InterSectionDivider'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className="max-w-screen min-h-screen overflow-x-hidden bg-[rgb(250,255,255)] ">
            <Topbar />
            <HeroSection />
            <WhenToSeek />
            <About />
            <Conditions />
            <InterSectionDivider />
            <Specialization />

            <Footer />

        </div>

    )
}

export default App