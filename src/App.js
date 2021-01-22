import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image1.jpg';
import image3 from './images/image1.jpg';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <div className='mySlides fade'>
            <img src={image1} style={{ width: '100%' }} />
          </div>
        </Section>
      </React.Fragment>
    );
  }
}

export default App;

const Section = styled.div`
  max-width: 100rem;
  position: relative;
  margin: auto;
`;
