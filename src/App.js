import './App.scss';
import { ColorsSection, DefaultSection, EnabledSection, IconsSection, SizesSection, ShadowsSection, Footer } from './components';

function App() {
  return (
    <div className='container'>
      <DefaultSection />
      <ColorsSection />
      <SizesSection />
      <IconsSection />
      <EnabledSection />
      <ShadowsSection />
      <Footer />
    </div>
    
  );
}

export default App;
