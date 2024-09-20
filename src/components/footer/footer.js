import React, { useEffect } from 'react';
import './footer.css'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealLinks } from '../animations/RevealLinks';
gsap.registerPlugin(ScrollTrigger)





export default function Footer() {



    // useEffect(() => {
    //     gsap.fromTo(".footer-logo p", 
    //         { y: 100, opacity: 0 }, // Initial state (below and hidden)
    //         {
    //             y: 0, // End state (back to original position)
    //             opacity: 1,
    //             duration: 0.5, 
    //             stagger: 0.1, // Stagger effect between letters
    //             ease: "power4.inOut",
    //             scrollTrigger: {
    //                 trigger: "footer",
    //                 start: "top 75%", // Adjust when animation should trigger
    //                 toggleActions: "play reverse play reverse", // Trigger and reverse behavior
    //                 markers: true,
    //             }
    //         });
    // }, []);



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
        
        
        // gsap.to(".footer-logo p",{
        //     y: 0,
        //     opacity: 1,
        //     stagger: 0.1,
        //     duration: 0.5,
        //     ease:"power4.inOut",
        //     scrollTrigger: {
        //         trigger: ".links-out",
        //         start: "top 75%",
        //         toggleActions: "play none play none",
        //         // markers: true,
        //     }
        // })


    },[])



    return (
        <div className={'footer-parent'}>
            <div className={'footer-spacer'}>

            </div>
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
                        <p>&nbsp;</p> {/* Space between 'revoc' and 'studios' */}
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
                        <div className={'links-out'}>
                            <div className={'footer-partition'}></div>
                            <div className={'footer-links-container'}>
                                <RevealLinks text={'Instagram'}/>
                                <RevealLinks text={'Twitter'}/>
                                <RevealLinks text={'Clutch'}/>
                                <RevealLinks text={'Dribbble'}/>    
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
