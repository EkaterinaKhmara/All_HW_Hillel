import './App.css';
import PersonCard from './components/personCard.js';
import Data from './data.json';


function App() {
  return (
    <div className="App">
    {
      Data.map(item => {
        return (  
        <PersonCard key = {item.id} data = {item} />
      )
      })
    }
    </div>
  )
}

export default App;
