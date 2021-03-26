import Digit from './Digit/Digit'
import './App.scss'
import { useEffect, useState } from 'react';
function App() {
  
  const [secs_0, setSecs_0] = useState(0);
  const [secs_1, setSecs_1] = useState(0);
  const [startTime, setStartTime] = useState(0);
  useEffect(() => {
    const time = new Date();
    setStartTime(time.getSeconds())
    setSecs_0(startTime/10)
    setSecs_1(startTime%10)
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      // setSecs_0(previous => previous+1);
      setSecs_1(previous => previous+1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="App">
      <Digit digit={secs_0}/>
      <Digit digit={secs_1}/>
    </div>
  );
}

export default App;
