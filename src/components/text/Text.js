import './Text.css'
import { useState, useEffect } from 'react';

export default function Text() {

  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, [])

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
      return [...Array(nbOfBlocks).keys()].map((_, index) => {
        return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
    })
  }

  const colorize = (el) => {
    el.style.backgroundColor = 'black'
    setTimeout( () => {
      el.style.backgroundColor = 'transparent';
    }, 300)
  }
  
  return (
    <div className={'container-txt '}>
      <div className={'body-txt chakra-petch-reg'}>
        <p>We craft solutions that transform ideas into visually striking realities.</p>
      </div>
      <div className={'grid-txt'}>
        {
          windowsWidth > 0 && [...Array(20).keys()].map( (_, index) => {
            return <div key={index} className={'column-txt'}>
                {
                  getBlocks()
                }
            </div>
          })
        }
      </div>
    </div>
  )
}