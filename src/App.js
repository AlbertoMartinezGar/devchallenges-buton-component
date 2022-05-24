import './App.scss';
import { ButtonComponent } from './components';

function App() {
  return (
    <div className='container'>
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

    </div>
    
  );
}

export default App;
