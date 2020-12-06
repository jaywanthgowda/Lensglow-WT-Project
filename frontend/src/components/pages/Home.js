import React, { Component } from 'react';
import '../../App.css';
import './home.css'
import Slider from 'react-slick';


const photos =[
  {
    name: 'pic1',
    url: 'https://static1.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11821-full-rim-wayfarer-c2-eyeglasses-dup_G_123ed.jpg'
  },
  {
    name: 'pic2',
    url: 'https://static.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11555-c4-full-rim-ate-steel-eyeglasses_g_3334_1.jpg'
  },
  {
    name: 'pic3',
    url: 'https://static.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e11684-c3-dupc-eyeglasses__g_8517.jpg'
  },
  {
    name: 'pic4',
    url: 'https://static1.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-full-rim-fc-e12091-c3-eyeglasses_fallon-colby-full-rim-fc-e12091-c3-eyeglasses_fallon-colby-full-rim-fc-e12091-c3-eyeglasses_fallon-colby-full-rim-fc-e12091-c3-eyeglasses_g_0802_1.jpg'
  },
  {
    name: 'pic5',
    url: 'https://static1.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11960-c2-full-rim-eyeglasses_vincent-chase-vc-e11960-c2-full-rim-eyeglasses_vincent-chase-vc-e11960-c2-full-rim-eyeglasses_g_2427.jpg'
  },
  {
    name: 'pic6',
    url: 'https://static2.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13072-c2-eye-dup__j_4435.jpg'
  },
  {
    name: 'pic7',
    url: 'https://static.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13450-fm-hexon-act-metal-sen-c2-eyegl0sses_j_9918_1.jpg'
  },
  {
    name: 'pic8',
    url: 'https://static2.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13450-fm-hexon-act-metal-sen-c1-eyegl0sses_j_9902_1.jpg'
  },
  {
    name: 'pic8',
    url: 'https://static2.lenskart.com/media/catalog/product/cache/1/small_image/376x180/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12404-c2-eyeglasses_g_3230.jpg'
  }
]


/*
function Home() {
    return (
      <div className="App">
      <Slider {...settings}>
      {
        photos.map((photo) => {
          return(
            <div>
            <img width='50%' src={photo.url} class='center'/>
            </div>
          )
        })
      }
      </Slider>
      <p id="head"><strong>Buy The Best Eyewear From LensGlow</strong></p>
  
      <p id="content">LensGlow is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach. From an ever-growing number of offline stores across major cities in the country to innovative integration of technology while purchasing online, LensGlow caters to every customer with several deals and offers.
  
    A one-stop online solution for purchasing eyewear and its accessories, LensGlow delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colours. If you want to try out contact lenses, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store. 
      </p>
      </div>
    )
}
*/

class Home extends Component{
	render(){
		 const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      className: "slides"
}
  return (
    <>
    <div className="Home">
    <Slider {...settings}>
    {
      photos.map((photo) => {
    	  return(
    		  <div>
    		  <img width='50%' src={photo.url} class='center' alt='Glasses Carousel'/>
    		  </div>
    		  )
      })
    }
    </Slider>
    <p id="head"><b>Buy The Best Eyewear From LensGlow</b></p>

	<p id="content">LensGlow is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach. From an ever-growing number of offline stores across major cities in the country to innovative integration of technology while purchasing online, LensGlow caters to every customer with several deals and offers.

	A one-stop online solution for purchasing eyewear and its accessories, LensGlow delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colours. If you want to try out contact lenses, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store. 
    </p>
    </div>
    </>
  );
}
}

export default Home;