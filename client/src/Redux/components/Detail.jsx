import React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getvideogame } from '../actions/actions';
export default function Detail() {
    let {ID}=useParams();
    const dispatch=useDispatch();
useEffect(()=>{
dispatch(getvideogame(ID)
)
},[ID,dispatch])
const Videogame=useSelector((state)=>state.Videogame)

    return (
        <div>
            <img src={Videogame.Imagen} alt={Videogame.Nombre} />
            <h1>{Videogame.Nombre}</h1>
             <p dangerouslySetInnerHTML={{__html: Videogame.Descripcion,}}/>
            <h3>{Videogame.Rating}</h3>
            <h3>{Videogame.Fecha}</h3>
            <ul>
                {Videogame.Plataformas && Videogame.Plataformas.map(el=><li key={el}>{el}</li>)}
            </ul>
        <ul>
        {Videogame.Genre && Videogame.Genre.map(elemento=>{
                return <li key={elemento}> {elemento}</li> 
        }    )}
        </ul>   
        </div>
    )
}
