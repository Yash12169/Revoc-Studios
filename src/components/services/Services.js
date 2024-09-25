import React from 'react'
import './Services.css'
import img1 from '../../assets/gif1.gif'
import img2 from '../../assets/gif2.gif'
import img3 from '../../assets/gif3.gif'
export default function Services() {


const carouselData = [
        {
            id:1,
            img: img1,
            title: "Learning & Research",
            description: "We are eager to learn more about you and your product. We will explore the markets, analyze competitors, and identify opportunities even the ones that you may have yet to consider."
        },
        {
            id:2,
            img: img2,
            title: "Brainstorming & Ideation",
            description: "The part where we will define key assets for you and your product. Big, pillar ideas, design concepts, and consumer-resonating slogans that will differentiate you and make you recognizable and loved."
        },
        {
            id:3,
            img: img3,
            title: "Production and Delivery",
            description: "In this step, we will fine-tune and transform concepts into production-ready assets, all set to be proudly shared with the world."
        },

]


  return (
    <div className='carousel-container-services'>
        <div className='heading-carousel-services chakra-petch-bold'>
            Services    
        </div>
        <div className='carousel-image-container-services'>
        {carouselData.map((carousel)=>(
            <div key={carousel.id} className='carousel-item-services'>
                <div className='carousel-image-services'>
                    <img src={carousel.img} alt="" className='service-gif-asset'/>
                </div>
                <div className='carousel-content-services'>
                    <p className='chakra-petch-bold cr-img-title-services'>{carousel.title}</p>
                    <p className='chakra-petch-reg cr-img-des-services'>{carousel.description}</p>
                </div>
            </div>
        ))}
         </div>
        <div className='carousel-footer-services'>
            <div>
                <p className='chakra-petch-bold cr-img-title-services'>Our Professional Services</p>
                <p className='chakra-petch-reg cr-img-des-services'>Delivering solutions that drive innovation and success.</p>
            </div>
            <div className="l-btn-rew">
                        <span className='chakra-petch-reg'>All Services</span>
                        <div className="icon-container-rew">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="text-white rotate-125 h-6 carousel-sv">
                                <path
                                    d="M12 3.25C12 4.17577 12.9164 5.55921 13.8432 6.72158C15.0364 8.21813 16.4612 9.52593 18.0953 10.524C19.3189 11.2713 20.8055 11.9894 22 11.9894M12 20.75C12 19.8242 12.9164 18.4408 13.8432 17.2784C15.0364 15.7819 16.4612 14.4741 18.0953 13.476C19.3189 12.7287 20.8055 12.0106 22 12.0106M22 12H2"
                                    stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div>
            </div>
    </div>
  )
}
