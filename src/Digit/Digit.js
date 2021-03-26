import React from 'react'
import Circle from '../Circle/Circle'
import {output} from '../logic'
import './Digit.scss'
const { v4: uuidv4 } = require('uuid');

function Digit(props) {
  const currentDigit = props?.digit >= 0 ? props.digit : 0
  const previousDigit = currentDigit === 0 ? 9 : currentDigit-1;
  const currentDigitArray = output(currentDigit);
  const previousDigitArray = output(previousDigit);
  const circles = []
  for(var i = 0; i < 24; i++){
    circles.push(<Circle key={uuidv4()} bottom={[previousDigitArray[0][i], currentDigitArray[0][i]]} top={[previousDigitArray[1][i], currentDigitArray[1][i]]}/>)
  }
  return (
      <div className="container">
        {circles}        
      </div>
  );
}

export default Digit
