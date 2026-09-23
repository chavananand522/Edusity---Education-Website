import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
    const [playState, setPlayState] = useState(false)

    return (
        <div>
            <div className="hero-section">
                <Navbar />
                <Hero />
            </div>

            <div className="container">

                <div id="program">
                    <Title subTitle="Our PROGRAM" title="What We Offer" />
                    <Programs />
                </div>

                <div id="about">
                    <About setPlayState={setPlayState} />
                </div>

                <div id="campus">
                    <Title subTitle="Gallery" title="Campus Photos" />
                    <Campus />
                </div>

                <div id="testimonials">
                    <Title subTitle="TESTIMONIALS" title="What Student Says" />
                    <Testimonials />
                </div>

                <div id="contact">
                    <Title subTitle="Contact Us" title="Get In Touch" />
                    <Contact />
                </div>

                <Footer />

            </div>

            <VideoPlayer
                playState={playState}
                setPlayState={setPlayState}
            />
        </div>
    )
}

export default App