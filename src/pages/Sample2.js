// App.js
import React from 'react';
import SlideInText from './SlideInText';
import SlideInText2 from './SlideInText2';

function Sample2() {
  return (
    <div className="Sample2">
      <h1>Welcome to My React Sample2</h1>
      {/* <SlideInText text="This text will slide in a with react-spring!" /> */}
      <SlideInText2 text="This text will slide in a with react-spring!" />
    </div>
  );
}

export default Sample2;
