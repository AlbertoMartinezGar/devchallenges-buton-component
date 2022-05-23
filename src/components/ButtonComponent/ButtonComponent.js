import React from 'react'

import './ButtonComponent.scss'

const ButtonComponent = ({text, type, color}) => {
  return (
    <button className={`
        btn 
        ${type ? type : 'default-button'}
        ${color ? color : 'default-color'}
    `} >
        {text}
    </button>
  )
}

export default ButtonComponent