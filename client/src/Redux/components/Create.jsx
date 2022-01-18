import React  from "react";
import {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { getallPlatform,Post,getgenre } from "../actions/actions";
export default function Create() {
    const [Data,setData]=useState({
        Nombre:'',
        Genre:[],
        Descripcion:'',
        Imagen:'',
        Fecha:'',
        Rating:0,
        Plataformas:[]
    })
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch( getallPlatform())
        dispatch( getgenre()) 
    },[dispatch])
    const Plataformas=useSelector(state=>state.Plataformas)
    const Genre=useSelector(state=>state.Genre)
    return (
        <div>
            
        </div>
    )
}
