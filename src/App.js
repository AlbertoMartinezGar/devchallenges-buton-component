import './App.scss';
import { ColorsSection, DefaultSection, EnabledSection, IconsSection, SizesSection } from './components';

function App() {
  return (
    <div className='container'>
      <DefaultSection />
      <ColorsSection />
      <SizesSection />
      <IconsSection />
      <EnabledSection />
    </div>
    
  );
}

export default App;
