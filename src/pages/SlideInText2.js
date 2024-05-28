// SlideInText.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const SlideInText = ({ text }) => {
  const props = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 1000 },
  });

  return <animated.div style={props}>{text}</animated.div>;
};

export default SlideInText;
