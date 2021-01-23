import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

const App = () => {
  //Image is displayed
  const [image, setImage] = React.useState(1);
  let imageShowed;
  if (image === 1) {
    imageShowed = image1;
  } else if (image === 2) {
    imageShowed = image2;
  } else if (image === 3) {
    imageShowed = image3;
  } else {
    imageShowed = image4;
  }
  // Auto change slide interval
  let interval = setInterval(
    () => (image === 4 ? setImage(1) : setImage(image + 1)),
    5000
  );
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);

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

  return (
    <Section>
      <div className='slideshow-container'>
        <div className='fade'>
          <img
            className='slider_image'
            src={imageShowed}
            style={{ width: '100%' }}
            alt='slider'
          />
          <h1 className='slider_title'>this is my title</h1>
        </div>
        <button className='prev' onClick={PrevImage}>
          &#10094;
        </button>
        <button className='next' onClick={NextImage}>
          &#10095;
        </button>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
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
  max-height: 70rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  .slideshow-container {
    max-height: 60rem;
    position: relative;
    margin: auto;
  }
  .slider_image {
    max-width: 100%;
    max-height: 50rem;
    object-fit: cover;
  }
  .slider_title {
    position: absolute;
    top: 0;
    color: white;
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
    cursor: pointer;
    height: 15rem;
    width: 25%;
    display: inline-block;
    object-fit: cover;
    transition: background-color 0.6s ease;
  }
  .active,
  .dot:hover {
    background-color: #717171;
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
