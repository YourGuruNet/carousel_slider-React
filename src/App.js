import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

const App = () => {
  //Image is displayed
  const [image, setImage] = React.useState(1);
  let quote1 = 'Jobs fill your pockets, adventures fill your soul';
  let quote2 = 'Travel is the only thing you buy that makes you richer';
  let quote3 = 'Work, Travel, Save, Repeat';
  let quote4 = 'Once a year, go someplace you’ve never been before';
  let imageShowed;
  let quoteShowed;
  if (image === 1) {
    imageShowed = image1;
    quoteShowed = quote1;
  } else if (image === 2) {
    imageShowed = image2;
    quoteShowed = quote2;
  } else if (image === 3) {
    imageShowed = image3;
    quoteShowed = quote3;
  } else {
    imageShowed = image4;
    quoteShowed = quote4;
  }

  // Change image functionality
  const ChangeImage = (index) => {
    setImage(index);
  };
  //Next image
  const NextImage = () => {
    image === 4 ? setImage(1) : setImage(image + 1);
  };

  // Previous image
  const PrevImage = () => {
    image === 1 ? setImage(4) : setImage(image - 1);
  };

  // Auto change slide interval
  const interval = useRef(null);
  const timeout = useRef(null);
  useEffect(() => {
    interval.current = setInterval(
      () => (image === 4 ? setImage(1) : setImage((i) => i + 1)),
      5000
    );
    timeout.current = setTimeout(() => {
      clearInterval(interval.current);
    }, 5000);

    return () => {
      clearInterval(interval.current);
      clearTimeout(timeout.current);
    };
  }, [image]);

  return (
    <Section>
      <div className='slideshow-container'>
        <div className='fade'>
          <img className='slider_image' src={imageShowed} alt='slider' />
          <h1 className='slider_title'>{quoteShowed}</h1>
        </div>
        <button className='prev' onClick={PrevImage}>
          &#10094;
        </button>
        <button className='next' onClick={NextImage}>
          &#10095;
        </button>
      </div>
      <div>
        <img
          src={image1}
          className='bottom_image'
          onClick={() => ChangeImage(1)}
        ></img>
        <img
          src={image2}
          className='bottom_image'
          onClick={() => ChangeImage(2)}
        ></img>
        <img
          src={image3}
          className='bottom_image'
          onClick={() => ChangeImage(3)}
        ></img>
        <img
          src={image4}
          className='bottom_image'
          onClick={() => ChangeImage(4)}
        ></img>
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
  box-shadow: 1rem 0.2rem 2rem 0.5rem rgba(255, 255, 255, 0.364);
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
  .prev,
  .next {
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

  .next {
    right: 0;
    border-radius: 0.3rem 0 0 0.3rem;
  }
  .prev:hover,
  .next:hover {
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

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;
