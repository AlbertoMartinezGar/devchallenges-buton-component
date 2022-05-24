import React from 'react'
import ButtonComponent from './ButtonComponent/ButtonComponent'

const SizesSection = () => {
  return (
    <div className='row mt-5'>
        <h1>Sizes</h1>
        <hr />
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'sm'} 
            type={'default'} 
            color={'primary'}
            size={'sm'}
          />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'md'}
            type={'default'}
            color={'primary'}
            size={'md'}
          />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'lg'} 
            type={'default'}
            color={'primary'}
            size={'lg'}
          />
        </div>
      </div>
  )
}

export default SizesSection