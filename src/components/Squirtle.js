import React from 'react';

const Squirtle = ({nombre, peso, altura, img}) => {
    return (
    <div>
        <h2>{nombre}</h2>
        <img src={img} alt={nombre}></img>
        <p>El pokemon se llama {nombre}, mide {altura} cm y pesa {peso} kg. </p>
    </div>
    )
}
export default Squirtle;