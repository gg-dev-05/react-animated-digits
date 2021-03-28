import './App.scss'
import { useState } from 'react';
import Digits from 'react-animated-digits-component'
import ReactMarkdown from 'react-markdown'

function App() {

  const [value, setValue] = useState(0)
  const [prev, setPrev] = useState(0)
  const [speed, setSpeed] = useState(0.4)
  const [size, setSize] = useState(24)
  const [digitColor, setColor] = useState("black")
  const [digitBorder, setDigitBorder] = useState(``)
  const [circleBorder, setCircleBorder] = useState(``)
  return (
    <div className="App" style={{width: "80%", margin: "4rem auto"}} >
        <div className="setters">
        <div>
            <h3>prevValue ({prev})</h3>
            <input type="number" id="prev" defaultValue="0" min="0" max="999" style={{width: "100%"}}
              onChange={(e) => {
                setPrev(e.target.value)
              }}
            />
        </div>

        <div>
            <h3>currentValue ({value})</h3>
            <input type="number" id="value" defaultValue="0" min="0" max="999" style={{width: "100%"}}
              onChange={(e) => {
                document.getElementById("prev").value = value;
                setPrev(value)
                setValue(e.target.value)
              }}
            />
        </div>

        <div>
            <h3>Animation Speed (secs)</h3>
            <input type="number" defaultValue="0.6" min="0" max="5" step="0.01" style={{width: "100%"}}
              onChange={(e) => {
                setSpeed(e.target.value)
              }}
            />
        </div>
            
        <div>
            <h3>Width ({size} rem)</h3>
            <input type="range" defaultValue="24" min="0" max="50" style={{width: "100%"}}
              onChange={(e) => {
                setSize(e.target.value)
              }}
            />
        </div>
        
        <div>
          <h3>digitColor ({digitColor})</h3>
            <input type="color" 
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
        </div>

        <div>
            <h3>Digit Borders ({digitColor})</h3>
            <div className="group">
              <input type="checkbox"
               onClick={(e) => {
                 let newDigitBorder;
                  if(e.target.checked){
                    if(digitBorder === "" ){
                      newDigitBorder = `1px solid ${digitColor}`
                    }
                    else{
                      newDigitBorder = `${digitColor}`
                    }
                    document.getElementById("digitBorder").value = newDigitBorder;
                    setDigitBorder(newDigitBorder)
                  }
                  else{
                    document.getElementById("digitBorder").value = "";
                    setDigitBorder(``)
                    }
                }}
              />
              <input type="string" id="digitBorder" placeholder={`1px solid ${digitColor}`} defaultValue={`${digitBorder}`} style={{width: "100%"}}
                  onChange={(e) => {
                    setDigitBorder(e.target.value)
                  }}
                />
            </div>
        </div>

        <div>
            <h3>Circle Borders ({digitColor})</h3>
            <div className="group">
              <input type="checkbox"
               onClick={(e) => {
                 let newCircleBorder;
                  if(e.target.checked){
                    if(circleBorder === "" ){
                      newCircleBorder = `1px dashed ${digitColor}`
                    }
                    else{
                      newCircleBorder = `${digitColor}`
                    }
                    document.getElementById("circleBorder").value = newCircleBorder;
                    setCircleBorder(newCircleBorder)
                  }
                  else{
                    document.getElementById("circleBorder").value = "";
                    setCircleBorder(``)
                    }
                }}
              />
              <input type="string" id="circleBorder" placeholder={`1px dashed ${digitColor}`} defaultValue={`${digitBorder}`} style={{width: "100%"}}
                  onChange={(e) => {
                    setCircleBorder(e.target.value)
                  }}
                />
            </div>
        </div>
      
    
        </div>
        <div className="digit_wraper">
          <Digits previousValue={prev} currentValue={value} animationSpeed={speed} size={size} digitColor={digitColor} digitBorder={digitBorder} circleBorder={circleBorder}/>
        </div>
              
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      </div>
   
  );
}

export default App;
