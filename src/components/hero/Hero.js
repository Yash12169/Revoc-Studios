import React, {useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import './Hero.css'
import heroImg from '../../assets/heroImage.jpg'
import heroVideo from '../../assets/heroVideo.mp4'
gsap.registerPlugin(CustomEase)
CustomEase.create(
    "hop",
    "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
);

function Hero() {

    const headerRef = useRef(null);
    const counterRef = useRef(null);
    const heroRef = useRef(null);
    const overlayRef = useRef(null);
    const heroImgRef = useRef(null);
    useEffect(() => {
        const splitTextIntoSpans =(selector)=>{
            let elements = document.querySelectorAll(selector);
            elements.forEach((element)=>{
                let text = element.innerText;

                let splitText = text.split("").map((char)=>{
                    return `<span>${char === " "?"&nbsp;&nbsp;" :char}</span>`;
                }).join("");

                element.innerHTML = splitText;
            });



        }
        splitTextIntoSpans(".header h1");
        function animateCounter(){
            const counterElement = document.querySelector(".counter p");
            console.log(counterElement)
            let currentValue = 0;
            const updateInterval = 300;
            const maxDuration = 2000;
            const endValue = 100;
            const startTime = Date.now();

            function updateCounter(){
                const elapsedTime = Date.now() - startTime;
                if(elapsedTime < maxDuration){
                    currentValue = Math.min(currentValue+Math.floor(Math.random()*30)+5,endValue);
                    counterElement.textContent = currentValue;
                    setTimeout(updateCounter,updateInterval)
                }
                else{
                    counterElement.textContent  = currentValue;
                    setTimeout(()=>{
                        gsap.to(counterElement,{
                            y:-20,
                            duration:1,
                            ease:"power3.inOut",
                            onStart:()=>{
                                revealLandingPage();
                            },
                        })
                    },-500)
                }
            }
            updateCounter();
        }






        gsap.to(".counter p",{
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 1,
            onComplete: animateCounter,
        })






        const revealLandingPage = ()=>{
            gsap.to(".hero",{
                clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
                duration: 2,
                ease: "hop",
                onStart: ()=>{
                    gsap.to(".hero", {
                        transform: "translate(-50%, -50%)  scale(1)",
                        duration: 2.25,
                        ease: "power3.inOut",
                        delay: 0.25,
                    });
                    gsap.to(".overlay", {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        duration: 2,
                        delay: 0.5,
                        ease: "hop",
                    });
                    // gsap.to(".hero-img img",{
                    //     y: 0,
                    //     transform: "scale(0.95)",
                    //     duration: 2.25,
                    //     ease: "power3.inOut",
                    //     delay: 0.25,
                    // });
                    gsap.to(".hero-img video",{
                        y: 0,
                        transform: "scale(0.95)",
                        duration: 2.25,
                        ease: "power3.inOut",
                        delay: 0.25,
                    });
                    gsap.to(".header h1 span" ,{
                        y: 0,
                        stagger: 0.2,
                        duration: 2,
                        ease: "power4.inOut",
                        delay: 0.75,
                    });
                },
            });
        }
    }, []);
    return (
        <div className="container">
            <div className="counter"><p ref={counterRef}>0</p></div>
            <section className="hero" ref={heroRef}>
                <div className="overlay" ref={overlayRef}></div>

                <nav>
                    <div className="nav-col">
                        <div className="nav-items">
                            <a href="www.google.com">revoc</a>
                        </div>
                        <div className="nav-items">
                            <p>Digital Studio</p>
                        </div>
                    </div>

                    <div className="nav-col">
                        <div className="nav-items">
                            <a href="#">Work</a>
                            <a href="#">Studio</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="nav-items">
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                        <div className="nav-items">
                            <p>Banglore, KA</p>
                        </div>
                    </div>


                </nav>


                <div className="header">
                    <h1 ref={headerRef}>revoc</h1>
                </div>

                <div className="hero-img">
                    <video width="600" autoPlay loop muted>
                        <source src={heroVideo} type="video/mp4"/>
                        Video is not supported in your browser.
                    </video>
                </div>

            </section>
        </div>
    );
}

export default Hero;