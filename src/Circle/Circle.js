import React, { useContext } from 'react'
import {DigitContext} from '../Digits/Digits'
import './Circle.scss'

const Circle = ({bottom, top}) => {
    const {size, animationSpeed, circleBorder, digitColor} = useContext(DigitContext)
    return (
        <div className="circle" style={{height: `${size/4}rem`, width: `${size/4}rem`, border: `${circleBorder}`}}>
            <div className={`line rotate_${bottom[0]}_${bottom[1]}_ob`} style={{height: `${size/8}rem`, animationDuration: `${animationSpeed}s`, background: `${digitColor}`}}></div>
            <div className={`line rotate_${top[0]}_${top[1]}_ot`} style={{height: `${size/8}rem`, animationDuration: `${animationSpeed}s` , background: `${digitColor}`}} ></div>
        </div>
    )
}

export default Circle
