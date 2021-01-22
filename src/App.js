import React from 'react';
import styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const App = () => {
  const [image, setImage] = React.useState(1);

  let imageShowed;
  if (image === 1) {
    imageShowed = image1;
  } else if (image === 2) {
    imageShowed = image2;
  } else {
    imageShowed = image3;
  }
  const ChangeImageDots = (index) => {
    setImage(index);
  };
  const NextImage = () => {
    image === 3 ? setImage(1) : setImage(image + 1);
  };

  const PrevImage = () => {
    image === 1 ? setImage(3) : setImage(image - 1);
  };
  return (
    <Section>
      <div className='slideshow-container'>
        <div className='fade'>
          <img src={imageShowed} style={{ width: '100%' }} />
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
        <span className='dot' onClick={() => ChangeImageDots(1)}></span>
        <span className='dot' onClick={() => ChangeImageDots(2)}></span>
        <span className='dot' onClick={() => ChangeImageDots(3)}></span>
      </div>
    </Section>
  );
};

export default App;

const Section = styled.div`
  .slideshow-container {
    max-width: 100rem;
    position: relative;
    margin: auto;
  }
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
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

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 0.3rem 0 0 0.3rem;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.2rem;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
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
