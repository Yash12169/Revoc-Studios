import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import {ReactLenis} from "lenis/react";
import Footer from "./components/footer/footer";
import Text from './components/text/Text';
import Bezier from './components/bezier/Bezier';
import Carousel from './components/carousel/Carousel';
function App() {
  return (
      <ReactLenis root>
          <div className="App">
              <Hero/> 
              <Text/>
              <Bezier/>
              <Carousel/>
              <Bezier/>
              <About/>
              <Footer/>                 
          </div>
      </ReactLenis>
  );
}

export default App;
