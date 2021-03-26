import React from 'react'
import Digit from '../Digit/Digit'
import './Digits.scss'
const { v4: uuidv4 } = require('uuid');

export const DigitContext = React.createContext()


const Digits = ({previousValue, currentValue, size=24, animationSpeed=0.2}) => {

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
        <DigitContext.Provider value={{size, animationSpeed}}>
            {digits}
        </DigitContext.Provider>
        </div>
    )
}

export default Digits
