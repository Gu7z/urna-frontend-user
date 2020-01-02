import React from 'react';
import '../App.css';

const Concluded = ({name}) => {
    return (
        <div className="App">
            <div className="End">
                Você votou em {name}, obrigado!
            </div>
        </div>
    )
}

export default Concluded;
