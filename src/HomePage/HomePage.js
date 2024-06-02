import React from 'react'
import './HomePage.css'
import { Container } from 'react-bootstrap'
import Typed from 'typed.js';

const HomePage = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <React.Fragment>
      <Container className='main-home-container'>
      <div className="right-home-container">
        <p>Left container</p>
        <span ref={el}></span>
      </div>
      <div className="left-home-container">
      <p>Right container</p>
      </div>
      </Container>
    </React.Fragment>
  )
}

export default HomePage
