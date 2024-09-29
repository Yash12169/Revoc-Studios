import React from 'react'
import './Carousel.css'
import img1 from '../../assets/services1.png'
import img2 from '../../assets/services3.png'
import img3 from '../../assets/services2.png'
export default function Carousel() {


const carouselData = [

        {
            id:1,
            img: img1,
            title: "MadSense",
            description: "Harnessing the power of AI to transform data into explosive digital marketing strategies, creating immersive advertising experiences."
        },
        {
            id:2,
            img: img2,
            title: "Pooortal",
            description: "Step into the future of rebranding with modern aesthetics and design. Poortal’s platform merges high-tech visuals with unparalleled functionality for the digital age."
        },
        {
            id:3,
            img: img3,
            title: "Primal Edge",
            description: "Delivering bold brand identities with a fierce, cutting-edge aesthetic that unleashes your inner beast."
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
