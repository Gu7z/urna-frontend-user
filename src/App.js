import React, { useState } from 'react';
import Cards from './components/cards'
import Concluded from './components/concluded'
import Operations from './components/operations'
import './App.css';

function App() {

  const [people, getPeople] = useState();

  if (!people) {
    Operations.getPeople().then(data=>{getPeople(data)})
  }

  const [hasVoted, Vote] = useState(false);
  const [name, setName] = useState('');

  const RenderPessoa = () => {
    if (people) {
      return(
        people.map(data => {    
          return <Cards setName={setName} Vote={Vote} key={data._id} pessoa={data} />
        })
      )
    }else{
      return null
    }
  }

  return (
    <div className="App">
      <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} > 
        {
          hasVoted ? (<Concluded name={name} />) : (<RenderPessoa/>)
        }
      </div>
    </div>
  );
}

export default App;
