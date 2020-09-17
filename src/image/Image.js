// ./src/image/Image.js

import React from 'react';
import './Image.css';
import cat from './react-builds-cat.png';

console.log(cat); // /static/media/react-builds-cat.45f7f4d2.png

function Image() {
  // Import result is the URL of your image.
  return (
  <div>
      <img src={cat} alt="Cat" />
      <div className="cat"></div>
  </div>
  );
}

export default Image;
