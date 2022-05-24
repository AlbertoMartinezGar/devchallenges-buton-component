import React from 'react'

import ButtonComponent from './ButtonComponent/ButtonComponent'

const ShadowsSection = () => {
  return (
    <div className='row mt-5 mb-5'>
        <h1>Shadows</h1>
        <hr />
        <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
                text={'Shadow'} 
                type={'default'}
                color={'primary'}
                size={'lg'}
                shadow={true}
            />
        </div>
        <div className='col-6 d-flex justify-content-center'>
            <ButtonComponent 
                text={'No shadow'} 
                type={'default'}
                color={'primary'}
                size={'lg'}
                shadow={false}
            />
        </div>
    </div>
  )
}

export default ShadowsSection