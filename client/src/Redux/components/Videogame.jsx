import React from 'react'
import {Link} from 'react-router-dom'

export default function Videogame({Nombre,Genre,Imagen,ID}) {
   
    return (
        <div>
            <Link to ={`/Videogames/${ID}`}>
            <img src={Imagen} alt={Nombre} />
            <h2>{Nombre}</h2>
            <h3>Genres</h3>
      
        {Genre && Genre.map(elemento=>{
            return <li key={ID+elemento}>{elemento}</li> 
        }    )}
        
            </Link>
        </div>
    )
}

