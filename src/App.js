import Digits from './Digits/Digits'
import './App.scss'
import { useState } from 'react';


function App() {

  
  return (
    <div className="App">
        <Digits previousValue={0} currentValue={12} size={24} animationSpeed={0.8}/>
      </div>
   
  );
}

export default App;
