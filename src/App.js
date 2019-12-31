import React, { useState, useEffect } from 'react';
import Cards from './components/cards'
import Concluded from './components/concluded'
import Operations from './components/operations'
import socketIOClient from "socket.io-client";
import './App.css';

const endPoint = 'http://localhost:3001'

const socket = socketIOClient(endPoint)

function App() {

  const [nomeEleitor, setNome] = useState();

  const [people, getPeople] = useState();

  useEffect( () => {
    socket.on()
    Operations.getPeople().then(data=>{getPeople(data)})
  }, [] )

  socket.on('foi', (data) => {
    console.log('data')
    setNome(data.nome)
  })

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
      {
        nomeEleitor ? 
        (
          <div>
            <h1>
              Ola, {nomeEleitor}.
            </h1>
            <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} > 
              {
                hasVoted ? (<Concluded name={name} />) : (<RenderPessoa/>)
              }
            </div>
          </div>
        ):(
          null 
        )
      }
    </div>
  );
}

export default App;
