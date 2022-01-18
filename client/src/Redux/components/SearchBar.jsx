import React  from "react";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {getvideogamename} from '../actions/actions'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [nombre,setNombre]=useState('')
    function handleChange(e){
        setNombre(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getvideogamename(nombre))
        setNombre('')
    }
    return (
        <div>
            <input type='text' placeholder='Buscar...' onChange={handleChange} value={nombre}/>
            <button type='submit' onClick={handleSubmit}>BUSCAR</button>
        </div>
    )
}

