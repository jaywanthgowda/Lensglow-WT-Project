import React from 'react';
import '../../App.css';
import './aboutus.css';


//import Cards from '../Cards';
//import HeroSection from '../HeroSection';
//import Footer from '../Footer';

/*function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}*/

function AboutUs() {
    return (
        <div className="App">
      <section id="about">
        <div className="about">
          <h1>About Lensglow!</h1>
        </div>
        <div className="students">
          <h1>Customers</h1>
          <h1>82,000</h1>
        </div>
        <div className="reviews">
          <h1>Reviews</h1>
          <h1>1,100</h1>
        </div>
        <div className="courses">
          <h1>Specifications</h1>
          <h1>100+</h1>
        </div>
      </section>
    </div>
    )
}

export default AboutUs;