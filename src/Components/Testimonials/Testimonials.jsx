import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForword = () => {
        if (tx > -50) {
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackword = () => {
        if (tx < 0) {
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>

            <img
                src={next_icon}
                alt=""
                className='next-btn'
                onClick={slideForword}
            />

            <img
                src={back_icon}
                alt=""
                className='back-btn'
                onClick={slideBackword}
            />

            <div className="slider">
                <ul ref={slider}>

                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Shraddha Patil</h3>
                                    <span>Edusity, India</span>
                                </div>
                            </div>

                            <p>
                                Choosing to persue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive coumminty state-of-the-art, facilities and
                                commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Jonathan Bayers</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>

                            <p>
                                My experience at Edusity has been truly amazing. The professors are
                                knowledgeable and supportive, and the learning environment has helped me
                                develop both my technical skills and confidence. I am grateful for the
                                opportunities and experiences I have received here.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Emili Roy</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>

                            <p>
                                Studying at Edusity has been a wonderful journey for me. The modern
                                facilities, friendly faculty, and engaging classes have made learning
                                enjoyable. The university has given me the knowledge and practical
                                experience I need to prepare for my future career.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>John Daniel</h3>
                                    <span>Edusity, Canada</span>
                                </div>
                            </div>

                            <p>
                                Edusity has provided me with an excellent academic experience. I have
                                learned from experienced teachers, worked on interesting projects, and met
                                students from different backgrounds. The supportive community has made my
                                university life memorable.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonials