import React from 'react'

import './ButtonComponent.scss'

const ButtonComponent = ({
  text, 
  type, 
  color, 
  size, 
  icon, 
  iconDirection = 'right',
  isEnabled,
  shadow = true
}) => {
  return (
    <button className={`
        btn d-flex align-items-center text-center justify-content-center
        ${type ? type : 'default'}
        ${color ? color : 'default'}
        ${size ? size : 'md'}
    `} disabled={isEnabled}>
        {
          icon ? (
            iconDirection === 'right' ? (
              <>
                {text}
                <span className="material-icons px-2">
                  {icon}
                </span>
              </>
            ) : (
              <>
                <span className="material-icons px-2">
                  {icon}
                </span>
                {text}
              </>
            )
          ) : (text)
        }
    </button>
  )
}

export default ButtonComponent