 import  {useEffect}  from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ReactLenis} from "lenis/react";
import './About.css';
import logo1 from '../../assets/logo1.jpg'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img6.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img4.jpg'
import Services from "../services/Services";
import Bezier from "../bezier/Bezier";
gsap.registerPlugin(ScrollTrigger);


export default function About() {

    
   
     useEffect(() => {
        const scrollTriggerSettings = {
            trigger: ".main-abt",
            start: "top 25%",
            toggleActions: "play reverse play reverse",

        };

        const leftXValues = [-800, -900, -400];
        const rightXValues = [800, 900, 400];
        const leftRotationValues = [-30, -20, -35];
        const rightRotationValues = [30, 20, 35];
        const yValues = [100, -150, -400];

        gsap.utils.toArray(".row-abt").forEach((row, index) => {
            const cardLeft = row.querySelector(".card-left");
            const cardRight = row.querySelector(".card-right");

            gsap.to(cardLeft, {
                x: leftXValues[index],
                scrollTrigger: {
                    trigger: ".main-abt",
                    start: "top center",
                    end: "150% bottom",
                    scrub: true,
                    
                    onUpdate: (self) => {
                        const progress = self.progress;
                        cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationValues[index]}deg)`;
                        cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationValues[index]}deg)`;
                    },
                },
            });
        });

        // gsap.to(".logo", {
        //     scale: 1,
        //     duration: 0.5,
        //     ease: "power1.out",
        //     scrollTrigger: scrollTriggerSettings,
        // });

         gsap.to(".logo-abt", {
             y: 0,
             duration: 0.5,
             ease: "power1.out",
             scrollTrigger: scrollTriggerSettings,
         });



        gsap.to(".line-abt p", {
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.in",
            scrollTrigger: scrollTriggerSettings,
        });

        gsap.to("button", {
            y: 0,
            opacity: 1,
            delay: 0.25,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: scrollTriggerSettings,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);



    const generateRows  = () => {
        const rows = []
        const images = [img1, img2, img3, img4, img5, img6];
        for (let i = 0; i < images.length; i += 2) {
            rows.push(
                <div className="row-abt" key={i / 2}>
                    <div className="card-abt card-left">
                        <img className={'img-about'} src={images[i]} alt={`split ${i + 1}`} />
                    </div>
                    {i + 1 < images.length && (
                        <div className="card-abt card-right">
                            <img className={'img-about'} src={images[i + 1]} alt={`split ${i + 2}`} />
                        </div>
                    )}
                </div>
            );
        }
        return rows;
    }
  return (
      <>
        <ReactLenis root>
            <section className={"hero-abt sec-about"}>
                <div className={'img-container-abt'}>
                    {/* <img className={'img-about'} src={logo1} alt={'logo1'}/> */}
                    <Services/>
                </div>
            </section>
            
            <section className={'main-abt sec-about'}>
                <div className={'main-content'}>
                    <div className={'logo-abt'}>
                        {/*<img src={logo2}/>*/}
                        <div className={"logogif"}>
                            <iframe src="https://giphy.com/embed/c3OZsDoaz7kD6" width="100%" height="100%"
                                    frameBorder="0" className="giphy-embed" title={'Giphy'}
                                    allowFullScreen></iframe>
                        </div>
                       
                    </div>
                    <div className={'copy-abt'}>
                        <div className={'line-abt'}>
                            <p className="chakra-petch-reg">We Transform ideas into powerful digital solutions</p>
                        </div>
                        <div className={'line-abt'}>
                            <p className="chakra-petch-reg">and craft bespoke experiences that </p>
                        </div>
                        <div className={'line-abt'}>
                            <p className="chakra-petch-reg">elevate brands and engage audiences.</p>
                        </div>
                    </div>
                </div>

                {generateRows()}
            </section>
        </ReactLenis>
      </>
  );
}
