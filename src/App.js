import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import {ReactLenis} from "lenis/react";
import Footer from "./components/footer/footer";
import { RevealLinks } from './components/animations/RevealLinks';
function App() {
  return (
      <ReactLenis root>
          <div className="App">
              <Hero/>
              <About/>
              {/* <RevealLinks/> */}
              {/* <div className='spacer'></div> */}

              
              <Footer/>

          </div>
      </ReactLenis>
  );
}

export default App;
