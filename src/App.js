import Digit from './Digit/Digit'
import './App.scss'
import { useEffect, useState } from 'react';
function App() {
  
  const [secs_0, setSecs_0] = useState(0);
  const [secs_1, setSecs_1] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const seconds = time.getSeconds();
      setSecs_0(parseInt(seconds/10));
      setSecs_1(parseInt(seconds%10))
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <Digit digit={secs_0}/>
      <Digit digit={secs_1}/>
      
    </div>
  );
}

export default App;
