import Circle from './Circle/Circle'
import './App.scss'
import {output} from './logic'
const { v4: uuidv4 } = require('uuid');
function App() {
  const res = output(0);

  const circles = []
  for(var i = 0; i < 24; i++){
    circles.push(<Circle key={uuidv4()} angle1={res[0][i]} angle2={res[1][i]}/>)
  }
  return (
    <div className="App">
      <div className="container">
        {circles}        
      </div>
      
    </div>
  );
}

export default App;
