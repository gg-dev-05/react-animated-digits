import Digits from './Digits/Digits'
import './App.scss'
import { useState } from 'react';


function App() {

  const [size, setSize] = useState(12);
  
  return (
    <div className="App">
        <button onClick={() => setSize(size+1)}>PRESS</button>
        <Digits previousValue={11} currentValue={12} size={size}/>
      </div>
   
  );
}

export default App;
