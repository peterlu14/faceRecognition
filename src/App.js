import React from 'react';
import Navigation from './Navigation/Navigation';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Rank from './Rank/Rank';
import particlesOption from './const/particlesOption';

import 'tachyons';
import Particles from 'react-particles-js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesOption}/>
      <Navigation/>
      <Rank/>
      <ImageLinkForm/>
      {// <FaceRecognition/>
      }
    </div>
  );
}

export default App;