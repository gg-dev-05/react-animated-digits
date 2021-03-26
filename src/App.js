import Digits from './Digits/Digits'
import './App.scss'
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0)
  const [prev, setPrev] = useState(0)
  const [speed, setSpeed] = useState(0.4)
  const [size, setSize] = useState(24)
  const [color, setColor] = useState("black")
  const [digitBorder, setDigitBorder] = useState("")
  const [circleBorder, setCircleBorder] = useState("")
  return (
    <div className="App" style={{width: "80%", margin: "4rem auto"}} >
        <div className="setters">
        <div>
            <h3>Value ({value})</h3>
            <input type="range" min="0" max="9" style={{width: "100%"}}
              onChange={(e) => {
                setPrev(value);
                setValue(e.target.value)
              }}
            />
        </div>

        <div>
            <h3> (Fast) Animation Speed (Slow)</h3>
            <input type="range" min="0" max="5" step="0.25" style={{width: "100%"}}
              onChange={(e) => {
                setSpeed(e.target.value)
              }}
            />
        </div>
            
        <div>
            <h3>Size ({size})</h3>
            <input type="range" min="24" max="50" style={{width: "100%"}}
              onChange={(e) => {
                setSize(e.target.value)
              }}
            />
        </div>
        
        <div>
            <h3>Color ({color})</h3>
            <input type="color" 
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
        </div>

        <div>
            <h3>Digit Borders ({color})</h3>
            <input type="checkbox" 
              onClick={(e) => {
                if(e.target.checked)
                  setDigitBorder(`1px solid ${color}`)
                else
                  setDigitBorder("")
              }}
            />
        </div>

        <div>
            <h3>Circle Borders ({color})</h3>
            <input type="checkbox" 
              onClick={(e) => {
                if(e.target.checked)
                  setCircleBorder(`1px solid ${color}`)
                else
                  setCircleBorder("")
              }}
            />
        </div>
      
    
        </div>
          {/* 
              (int) previousValue: 0 (default) set the starting value of the digit
              (int) currentValue: 0 (default) set the final value of the digit
              (float) animationSpeed: 0.6s (default) set animation speed
              (int) size: 24 (default) sets the width of the digit container in rem
              (string) digitColor: black (default) set the color of the rotating lines
              (string) digitBorder: black (default) set the border of the digit container. eg: 1px solid red
              (string) circleBorder: black (default) set the border of the circles around which the lines rotate. eg: 1px solid red
          */}
        <Digits previousValue={prev} currentValue={value} animationSpeed={speed} size={size} digitColor={color} digitBorder={digitBorder} circleBorder={circleBorder}/>
      </div>
   
  );
}

export default App;
