import React from 'react'
import ButtonComponent from './ButtonComponent/ButtonComponent'

const DefaultSection = () => {
  return (
    <div className='row'>
        <h1>Variants</h1>
        <hr/>
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'Default'} 
            type={'default'} 
          />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'Outline'}
            type={'outline'}
          />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'Text'} 
            type={'text'}
          />
        </div>
      </div>
  )
}

export default DefaultSection