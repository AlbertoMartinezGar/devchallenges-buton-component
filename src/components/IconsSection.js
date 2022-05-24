import React from 'react'
import ButtonComponent from './ButtonComponent/ButtonComponent'

const IconsSection = () => {
  return (
    <div className='row mt-5'>
        <h1>Icons</h1>
        <hr />
        <div className='row mb-3'>
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
        <div className='row mb-3'>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'primary'}
              size={'lg'}
              icon={'favorite'}
              iconDirection={'right'}
            />
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'primary'}
              size={'lg'}
              icon={'favorite'}
              iconDirection={'left'}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'primary'}
              size={'lg'}
              icon={'verified'}
              iconDirection={'right'}
            />
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'primary'}
              size={'lg'}
              icon={'verified'}
              iconDirection={'left'}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'secondary'}
              size={'lg'}
              icon={'build'}
              iconDirection={'right'}
            />
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'secondary'}
              size={'lg'}
              icon={'build'}
              iconDirection={'left'}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'danger'}
              size={'lg'}
              icon={'highlight_off'}
              iconDirection={'right'}
            />
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
              text={'Icon'} 
              type={'default'}
              color={'danger'}
              size={'lg'}
              icon={'highlight_off'}
              iconDirection={'left'}
            />
          </div>
        </div>
      </div>
  )
}

export default IconsSection