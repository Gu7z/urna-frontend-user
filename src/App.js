import React, { useState, useEffect } from 'react';
import Cards from './components/cards'
import Concluded from './components/concluded'
import Operations from './components/operations'
import socketIOClient from "socket.io-client";
import './App.css';

/**
    1 - Grafico
    2 - Logico
    3 - Input
*/ 

const endPoint = 'http://localhost:3001'

const socket = socketIOClient(endPoint)

function App() {

  const [nomeEleitor, setNome] = useState();
  const [people, getPeople] = useState();
  const [hasVoted, Vote] = useState(false);
  const [name, setName] = useState('');

  useEffect( () => {
    socket.on('votar', (data) => {
      setNome(data.nome)
    })
    socket.on('fimVotar', () => {
      setTimeout(() => {
        Vote(false)
        setName('')
        setNome('')
      }, 3000);
    })
    Operations.getPeople().then(data=>{getPeople(data)})
  }, [] )

  const votou = () => {
    socket.emit('fim')
  }

  const RenderPessoa = () => {
    if (people) {
      return(
        people.map(data => {    
          return <Cards votou={votou} setName={setName} Vote={Vote} key={data._id} pessoa={data} />
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
