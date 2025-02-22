// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Slide0 from './components/Slide0';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide4_2 from './components/Slide4-2';
import 'animate.css';

const App = () => {
  return (
    <div id="fullpage-slider">
      <Slide0 />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4_2 />
      <Slide4 />
      <Slide5 />
    </div>
  );
};

export default App;