import './App.scss';
import { ColorsSection, DefaultSection, EnabledSection, IconsSection, SizesSection, ShadowsSection } from './components';

function App() {
  return (
    <div className='container'>
      <DefaultSection />
      <ColorsSection />
      <SizesSection />
      <IconsSection />
      <EnabledSection />
      <ShadowsSection />
    </div>
    
  );
}

export default App;
