import React, { useEffect } from 'react';
import styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

let interval;
let quote1 = 'Jobs fill your pockets, adventures fill your soul';
let quote2 = 'Travel is the only thing you buy that makes you richer';
let quote3 = 'Work, Travel, Save, Repeat';
let quote4 = 'Once a year, go someplace you’ve never been before';

const images = [image1, image2, image3, image4];
const quotes = [quote1, quote2, quote3, quote4];
const App = () => {
  //Image is displayed
  const [image, setImage] = React.useState(0);

  // Auto change slide interval
  useEffect(() => {
    interval = setInterval(() => {
      image === 3 ? setImage(1) : setImage(image + 1);
      clearInterval(interval.current);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [image]);

  // Change image functionality
  const ChangeImage = (index) => {
    setImage(index);
  };
  //Next image
  const NextImage = () => {
    image === 3 ? setImage(1) : setImage(image + 1);
  };

  // Previous image
  const PrevImage = () => {
    image === 1 ? setImage(3) : setImage(image - 1);
  };

  return (
    <Section>
      <div className='slideshow-container'>
        <div>
          <img className='slider_image' src={images[image]} alt='slider' />
          <h1 className='slider_title'>{quotes[image]}</h1>
        </div>
        <button className='slider_prev' onClick={PrevImage}>
          &#10094;
        </button>
        <button className='slider_next' onClick={NextImage}>
          &#10095;
        </button>
      </div>
      <div>
        <div>
          {images.map((image, i) => (
            <img
              key={i}
              alt={`slider${i}`}
              src={image}
              className='bottom_image'
              onClick={() => ChangeImage(i)}
            ></img>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default App;

const Section = styled.div`
  max-width: 140rem;
  max-height: 60rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  box-shadow: 0.5rem 0.5rem 2rem 0.5rem rgba(59, 59, 59, 0.737);
  .slideshow-container {
    max-height: 60rem;
    position: relative;
    margin: auto;
  }
  .slider_image {
    width: 100%;
    max-height: 40rem;
    object-fit: cover;
  }
  .slider_title {
    position: absolute;
    top: 0;
    color: white;
    margin: 3rem;
    font-size: 4rem;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.658);
    padding: 0.5rem;
  }
  .slider_prev,
  .slider_next {
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    top: 50%;
    width: auto;
    margin-top: -2.2rem;
    padding: 1.6rem;
    color: white;
    font-weight: bold;
    font-size: 1.8rem;
    transition: 0.6s ease;
    border-radius: 0 0.3rem 0.3rem 0;
    user-select: none;
  }

  .slider_next {
    right: 0;
    border-radius: 0.3rem 0 0 0.3rem;
  }
  .slider_prev:hover,
  .slider_next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .bottom_image {
    padding: 0.5rem;
    cursor: pointer;
    height: 18rem;
    width: 25%;
    display: inline-block;
    object-fit: cover;
    transition: all 0.6s ease;
    opacity: 0.5;

    :hover {
      opacity: 1;
      transform: scale(1.1) translateY(0.6rem);
      z-index: 99;
      position: relative;
    }
  }

  @media screen and (max-width: 43.75em) {
    .slider_title {
      text-align: center;
      font-size: 3rem;
    }

    .bottom_image {
      height: 10rem;
    }
  }

  @media screen and (max-width: 25em) {
    .slider_title {
      margin: 3rem;
      font-size: 2rem;
    }

    .bottom_image {
      padding: 0.5rem;
      cursor: pointer;
      height: 6rem;
      width: 25%;
    }
  }
`;
