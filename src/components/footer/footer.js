import React, { useEffect } from 'react';
import './footer.css'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealLinks } from '../animations/RevealLinks';
import insta from '../../assets/instagram-2016-5.svg'
import twitter from '../../assets/x-2.svg'
import behance from '../../assets/behance.svg'
import dribbble from '../../assets/dribbble-icon.svg'
gsap.registerPlugin(ScrollTrigger)





export default function Footer() {
    useEffect(()=>{
        gsap.utils.toArray(".footer-partition").forEach(partition=>{
            gsap.to(partition, 
                {
                    duration: 0.009,
                    height: 170,
                    ease: "power1.in",
                    scrollTrigger: {
                        trigger: "footer",
                        scrub: true, 
                        start: "top 70%",
                        end: "bottom bottom",
                        toggleActions: "play reverse play reverse",
                        // markers: true,
                    }
                },
            )
        })
    },[])
    return (
        <div className={'footer-parent'}>
            <div className={'footer-spacer'}></div>
            <footer>
                <div className={'footer-heading'}>
                    <p>Lets discuss your project!</p>
                    <div className='footer-heading-des'>
                        <p>
                            Revoc Studios is a web design and development studio that brings creativity and technology together to craft stunning digital experiences. Based in Banglore, KA.
                        </p>
                    </div>
                </div>
                
                <div className={'footer-matter'}>
                    <div className={'footer-logo'}>
                        <p>r</p>
                        <p>e</p>
                        <p>v</p>
                        <p>o</p>
                        <p>c</p>
                        <p>&nbsp;</p> 
                        <p>s</p>
                        <p>t</p>
                        <p>u</p>
                        <p>d</p>
                        <p>i</p>
                        <p>o</p>
                        <p>s</p>
                    </div>
                    <div className={'footer-content'}>
                        <div className={'links-out'}>
                            <div className={'footer-partition'}></div>
                            <div className={'footer-links-container'}>
                                <div className={'footer-links'}>
                                    <RevealLinks text={"Work"}/>
                                    <RevealLinks text={"Contact"}/>
                                    <RevealLinks text={"Studio"}/>
                                </div>
                                <div className={'copyright'}>
                                    <p>©Revoc 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className='partition-mob'></div>
                        <div className={'links-out'}>
                            <div className={'footer-partition'}></div>
                            <div className={'footer-links-container mob-2'}>
                                <RevealLinks text={'Instagram'}/>
                                <RevealLinks text={'Twitter'}/>
                                <RevealLinks text={'Behance'}/>
                                <RevealLinks text={'Dribbble'}/>    
                            </div>
                            <div className={'footer-links-container-mob'}>
                                                             <img src={insta}/>
                                <img src={dribbble}/>
                                <img src={behance}/>
                                <img src={twitter}/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
