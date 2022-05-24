import React from 'react'
import ButtonComponent from './ButtonComponent/ButtonComponent'

const IconsSection = () => {
  return (
    <div className='row mt-5'>
        <h1>Icons</h1>
        <hr />
        <div className='col-6 d-flex justify-content-center'>
          <ButtonComponent 
            text={'Icon'} 
            type={'default'}
            color={'primary'}
            size={'lg'}
            icon={'pending'}
            iconDirection={'right'}
          />
        </div>
        <div className='col-6 d-flex justify-content-center'>
          <ButtonComponent 
            text={'Icon'} 
            type={'default'}
            color={'primary'}
            size={'lg'}
            icon={'pending'}
            iconDirection={'left'}
          />
        </div>
      </div>
  )
}

export default IconsSection