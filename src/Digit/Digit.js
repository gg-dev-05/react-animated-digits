import React from 'react'
import Circle from '../Circle/Circle'
import {output} from '../logic'
import './Digit.scss'
const { v4: uuidv4 } = require('uuid');

function Digit({digit=0}) {
  const res = output(digit);
  const circles = []
  for(var i = 0; i < 24; i++){
    circles.push(<Circle key={uuidv4()} angle1={res[0][i]} angle2={res[1][i]}/>)
  }
  return (
      <div className="container">
        {circles}        
      </div>
  );
}

export default Digit
