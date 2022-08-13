import './App.css';
import HeaderComp from './components/HeaderComp.js';
import MainComp from './components/MainComp.js';
import SideBarComp from './components/SideBarComp.js';

function App() {
  return (
    <div className='App'>
      <HeaderComp />
        <div className='Side-main'>
          <SideBarComp />
          <MainComp />
        </div>
    </div>
  );
}

export default App;