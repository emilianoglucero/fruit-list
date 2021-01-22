import './App.css';
import fruits from './data/fruits';
import { FruitList } from './components/FruitList';

function App() {
  return (
    <div className="App">

    {/* 
    
    
    */}

    {
      //console.log(fruits);
      fruits.splice(3, 1, 'Orange')
    }

      {
        fruits.map( 
            ( info ) => (
                <FruitList 
                  key={ info.id }
                  info={ info }
                />
            )
        )
      }

    </div>
  );
}

export default App;
