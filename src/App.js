import Digits from './Digits/Digits'
import './App.scss'
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Digits previousValue={0} newValue={123456789}/>
    </div>
  );
}

export default App;
