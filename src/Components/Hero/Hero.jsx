import React from 'react'
import './Hero.css'
import hero_video from '../../assets/vit-small.mp4'

const Hero = () => {
    return (
        <div className="hero">

            <video
                className="hero-video"
                src={hero_video}
                autoPlay
                muted
                loop
                playsInline
            ></video>

            <div className="hero-txt">
                

                <h1>
                    A Journey<br />
                    To Excellence
                </h1>
            </div>

        </div>
    )
}

export default Hero