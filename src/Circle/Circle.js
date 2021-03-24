import React from 'react'
import './Circle.scss'

const Circle = ({angle1=90, angle2=90}) => {
    
    return (
        <div className="circle">
            <div className={`line rotate_${angle1}_ob`}></div>
            <div className={`line rotate_${angle2}_ot`}></div>
        </div>
    )
}

export default Circle
