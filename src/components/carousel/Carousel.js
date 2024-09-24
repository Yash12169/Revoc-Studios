import React from 'react'
import './Carousel.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
export default function Carousel() {


const carouselData = [

        {
            id:1,
            img: img1,
            title: "MadSense",
            description: "Identity and product design for this AI-powered marketing and advertising tool."
        },
        {
            id:2,
            img: img2,
            title: "Pooortal",
            description: "Rebranding and redesigning a file-sharing app."
        },
        {
            id:3,
            img: img3,
            title: "Bassivity Group",
            description: "Brand identity and product design services for the Bassivity Group."
        },

]


  return (
    <div className='carousel-container'>
        <div className='heading-carousel chakra-petch-bold'>
            Recent Projects    
        </div>
        <div className='carousel-image-container'>
        {carouselData.map((carousel)=>(
            <div key={carousel.id} className='carousel-item'>
                <div className='carousel-image'>
                    <img src={carousel.img} alt=""/>
                </div>
                <div className='carousel-content'>
                    <p className='chakra-petch-bold cr-img-title'>{carousel.title}</p>
                    <p className='chakra-petch-reg cr-img-des'>{carousel.description}</p>
                </div>
            </div>
        ))}
         </div>
        <div className='carousel-footer'>
            <div>
                <p className='chakra-petch-bold cr-img-title'>Explore More Projects</p>
                <p className='chakra-petch-reg cr-img-des'>Discover other exciting works that challenge the norm.</p>
            </div>
            <div className="l-btn-rew">
                        <span className='chakra-petch-reg'>All Projects</span>
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
