import React from 'react'
import ButtonComponent from './ButtonComponent/ButtonComponent'

const ColorsSection = () => {
  return (
    <div className='row mt-5'>
        <h1>Colors</h1>
        <hr/>
          <div className='row mb-5'>
            <h3 className='mb-4'>Primary</h3>
            <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Default'} 
                type={'default'} 
                color={'primary'}
              />
            </div>
            <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Outline'}
                type={'outline'}
                color={'primary'}
              />
            </div>
            <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Text'} 
                type={'text'}
                color={'primary'}
              />
            </div>
        </div>
        <div className='row mb-5'>
          <h3 className='mb-4'>Secondary</h3>
          <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Default'} 
                type={'default'} 
                color={'secondary'}
              />
            </div>
            <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Outline'}
                type={'outline'}
                color={'secondary'}
              />
            </div>
            <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Text'} 
                type={'text'}
                color={'secondary'}
              />
            </div>
        </div>
        <div className='row'>
          <h3>Danger</h3>
          <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Default'} 
                type={'default'} 
                color={'danger'}
              />
            </div>
            <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Outline'}
                type={'outline'}
                color={'danger'}
              />
            </div>
            <div className='col-4 d-flex justify-content-center'>
              <ButtonComponent 
                text={'Text'} 
                type={'text'}
                color={'danger'}
              />
            </div>
        </div>
      </div>
  )
}

export default ColorsSection