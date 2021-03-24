import Circle from './Circle/Circle'
import './App.scss'
function App() {
  const angles = [0, 45, 90, 135, 180];
  
  return (
    <div className="App">
      <div className="container">
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        <Circle angle1={angles[Math.floor(Math.random() * angles.length)]} angle2={angles[Math.floor(Math.random() * angles.length)]}/>
        
      </div>
      
    </div>
  );
}

export default App;
