import React from 'react'

import './ButtonComponent.scss'

const ButtonComponent = ({text, type, color, size}) => {
  return (
    <button className={`
        btn 
        ${type ? type : 'default'}
        ${color ? color : 'default'}
        ${size ? size : 'md'}
    `} >
        {text}
    </button>
  )
}

export default ButtonComponent