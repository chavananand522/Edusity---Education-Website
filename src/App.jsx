import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <div>
            <Navbar />

            <div id="hero">
                <Hero />
            </div>

            <div className="container">

                <div id="program">
                    <Title subTitle='Our PROGRAM' title='What We Offer' />
                    <Programs />
                </div>

                <div id="about">
                    <About />
                </div>

                <div id="campus">
                    <Title subTitle='Gallery' title='Campus Photos' />
                    <Campus />
                </div>

                <div id="testimonials">
                    <Title subTitle='TESTIMONIALS' title='What Student Says' />
                    <Testimonials />
                </div>

                <div id="contact">
                    <Title subTitle='Contact Us' title='Get In Touch' />
                    <Contact />
                </div>

                <Footer />

            </div>
        </div>
    )
}

export default App