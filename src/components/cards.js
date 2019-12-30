import React from 'react';
import Operations from './operations'

const Card = ({setName, pessoa, Vote}) => {

  return (
      <div className="card" style={{maxWidth: '180px', margin: '15px'}}>
        <img style={{maxWidth: '180px'}} src={pessoa.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{pessoa.name}</h5>
          <p className="card-text">{pessoa.desc}</p>
        </div>
        <button onClick={() => {
          Operations.postVote({id: pessoa._id})
          Vote( true )
          setName(pessoa.name)
        }} style={{backgroundColor: '#19882c', color: 'white'}} className="card-footer">
            Votar
        </button> 
      </div>
  );
}

export default Card;
