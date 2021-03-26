import React from 'react'
import Digit from '../Digit/Digit'
import './Digits.scss'
const { v4: uuidv4 } = require('uuid');

const Digits = ({previousValue, currentValue}) => {
    let previousValueAsString = String(previousValue)
    let currentValueAsString = String(currentValue)
    
    const lengthOfPreviousString = previousValueAsString.length;
    const lengthOfNewString = currentValueAsString.length;
    const diff = Math.abs(lengthOfPreviousString-lengthOfNewString);
    if(lengthOfNewString < lengthOfPreviousString){
        currentValueAsString = "0".repeat(diff) + currentValueAsString;
    }
    else{
        previousValueAsString = "0".repeat(diff)+ previousValueAsString;
    }
    const lengthOfEqualStrings = previousValueAsString.length;
    const digits = []
    for(var i = 0; i < lengthOfEqualStrings; i++){
        digits.push(<Digit key={uuidv4()} previousDigit={parseInt(previousValueAsString[i])} currentDigit={parseInt(currentValueAsString[i])}/>)
    }

    return (
        <div className="digits">
            {digits}
        </div>
    )
}

export default Digits
