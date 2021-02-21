import React, { useState } from 'react';
import styled from 'styled-components';
import squaredArrow from '../../images/canada-flag.svg';

const ArrowButton = styled.img`
  position: fixed; 
  width: 20px;
  right: 24%;
  bottom: 320px;
  align-items: center;
  height: 20px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  transition: opacity 0.4s;
  opacity: 0.5;
  background: url(${squaredArrow});
`;

const ToTopButton = () =>{

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 800){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 800){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <ArrowButton className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}
  
export default ToTopButton;