import React from 'react'
import Digit from '../Digit/Digit'
import './Digits.scss'
const { v4: uuidv4, parse } = require('uuid');

const Digits = ({previousValue, newValue}) => {
    let previousValueAsString = String(previousValue)
    let newValueAsString = String(newValue)
    
    const lengthOfPreviousString = previousValueAsString.length;
    const lengthOfNewString = newValueAsString.length;
    const diff = Math.abs(lengthOfPreviousString-lengthOfNewString);
    if(lengthOfNewString < lengthOfPreviousString){
        newValueAsString = "0".repeat(diff) + newValueAsString;
    }
    else{
        previousValueAsString = "0".repeat(diff)+ previousValueAsString;
    }
    const lengthOfEqualStrings = previousValueAsString.length;
    const digits = []
    for(var i = 0; i < lengthOfEqualStrings; i++){
        digits.push(<Digit key={uuidv4()} previousDigit={parseInt(previousValueAsString[i])} currentDigit={parseInt(newValueAsString[i])}/>)
    }

    return (
        <div className="digits">
            {digits}
        </div>
    )
}

export default Digits
