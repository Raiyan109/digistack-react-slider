import './App.css'
import Swiper1 from './components/Swiper1';
import Swiper2 from './components/Swiper2';
import Swiper3 from './components/Swiper3';

function App() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
      <Swiper1 />
      <Swiper2 />
      <Swiper3 />
    </div>
  )
}

export default App
