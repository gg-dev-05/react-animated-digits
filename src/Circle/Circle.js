import React, { useContext } from 'react'
import {DigitContext} from '../Digits/Digits'
import './Circle.scss'

const Circle = ({bottom, top}) => {
    const {size, animationSpeed} = useContext(DigitContext)
    return (
        <div className="circle" style={{height: `${size/4}rem`, width: `${size/4}rem`}}>
            <div className={`line rotate_${bottom[0]}_${bottom[1]}_ob`} style={{height: `${size/8}rem`, animationDuration: `${animationSpeed}s`}}></div>
            <div className={`line rotate_${top[0]}_${top[1]}_ot`} style={{height: `${size/8}rem`, animationDuration: `${animationSpeed}s`}} ></div>
        </div>
    )
}

export default Circle
