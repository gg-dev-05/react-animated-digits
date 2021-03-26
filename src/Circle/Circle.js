import React from 'react'
import './Circle.scss'

const Circle = ({bottom, top}) => {
    return (
        <div className="circle">
            <div className={`line rotate_${bottom[0]}_${bottom[1]}_ob`}></div>
            <div className={`line rotate_${top[0]}_${top[1]}_ot`}></div>
        </div>
    )
}

export default Circle
