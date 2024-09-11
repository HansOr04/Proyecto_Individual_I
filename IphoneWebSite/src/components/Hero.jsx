import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
const Hero = () => {
    useState[videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
    }, [])
    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id="hero" className='hero-title' >iPhone 16 Pro</p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} />
                    </video>
                </div>

            </div>

        </section>
    )
}

export default Hero