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
            text={'Default button'} 
            type={'default-button'} 
          />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'Outline button'}
            type={'outline-button'}
          />
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <ButtonComponent 
            text={'Text button'} 
            type={'text-button'}
          />
        </div>
      </div>
    </div>
    
  );
}

export default App;
