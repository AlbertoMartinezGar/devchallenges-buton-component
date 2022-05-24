import React from 'react'
import ButtonComponent from './ButtonComponent/ButtonComponent'

const EnabledSection = () => {
  return (
    <div className='row mt-5'>
        <h1>Enabled or Disabled</h1>
        <hr />
        <div className='row mb-3'>
            <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
                text={'Endabled'} 
                type={'default'}
                color={'secondary'}
                size={'lg'}
                isEnabled={false}
            />
            </div>
            <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
                text={'Disabled'} 
                type={'default'}
                color={'secondary'}
                size={'lg'}
                isEnabled={true}
            />
            </div>
        </div>
        <div className='row'>
            <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
                text={'Endabled'} 
                type={'text'}
                color={'secondary'}
                size={'lg'}
                isEnabled={false}
            />
            </div>
            <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
                text={'Disabled'} 
                type={'text'}
                color={'secondary'}
                size={'lg'}
                isEnabled={true}
            />
            </div>
        </div>
      </div>
  )
}

export default EnabledSection