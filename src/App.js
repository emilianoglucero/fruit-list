import { FruitList } from './components/FruitList';

import styled from 'styled-components'

const MainContainer = styled.div`

  margin: 12rem;
  text-align: center;

`

function App() {

  return (
    <div className="App">

    <MainContainer>
      <FruitList />
    </MainContainer>


    </div>
  );
  
}

export default App;
