import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Frames!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-polarized-vc-s11075-c5-sunglasses_g_5037_Image_PLA.jpg'
              text='Black Grey Full Rim Aviator Vincent Chase Polarized'
              label='Sunglasses'
              path='/contact-us'
            />
            <CardItem
              src='https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e10334-c1-eyeglases_john-jacobs-jj-e10334-c1-eyeglases_m_5283_1_Image_PLA.jpg'
              text='Black Full Rim Round John Jacobs Rich Acetate'
              label='Premium'
              path='/contact-us'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//y/o/yoohee-mj-204-c1-eyeglasses_g_5467.jpg'
              text='Black Yellow Full Rim Rectangle Kids (8 yrs) Yoohee'
              label='Kids'
              path='/contact-us'
            />
            <CardItem
              src='https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-s12023-c3-sunglasses_g_9125_Image_PLA.jpg'
              text='Brown Tortoise Golden Brown Purple Gradient Full Rim Round Fallon'
              label='Exclusive'
              path='/contact-us'
            />
            <CardItem
              src='https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e12830-c1-eyeglasses_G_1597_Image_PLA_3.jpg'
              text='Blue Block Phone & Computer Glasses'
              label='Computer Glasses'
              path='/contact-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;