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
  shadow
}) => {
  return (
    <button className={`
        btn d-flex align-items-center text-center justify-content-center
        ${type ? type : 'default'}
        ${color ? color : 'default'}
        ${size ? size : 'md'}
        ${shadow && shadow === true ? 'shadow' : ''}
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