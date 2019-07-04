import React, { Component } from 'react';
import FirstSection from './components/section1';
import SecondSection from './components/section2';
import ThirdSection from './components/section3';
import FourthSection from './components/section4';
import FifthSection from './components/section5';

class App extends Component {
  render() {
    return (
      <div>       
       <FirstSection />
       <SecondSection />
       <ThirdSection />
       <FourthSection />
       <FifthSection />
      </div>  
    );
  }
}
export default App;