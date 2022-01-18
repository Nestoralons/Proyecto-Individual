import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from'react-redux';
import { getallvideogames,getgenre,filter,filtercreate,SortBy,sortbyname} from "../actions/actions";

export default function Nav({ChangePage}) {
   
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getgenre())
    },[dispatch])
    const Genre=useSelector((state)=>state.Genre)
    function handlesubmit(e){
        e.preventDefault();
        dispatch(getallvideogames());
    
    }
    function handleclick(e){
e.preventDefault() 
dispatch(filter(e.target.value))
}
function handleClick(e){
    e.preventDefault()
    dispatch(filtercreate(e.target.value))
}function handleSort(e){
    e.preventDefault()
    dispatch(SortBy(e.target.value))
    ChangePage(1)
}
function handleSortByName(e){
    e.preventDefault()
    dispatch(sortbyname(e.target.value))
    ChangePage(1)
}
    return (
        <div>
        <Link to='/crearvideojuego'>
        <h2>Crear Videojuego</h2>
            </Link>
            <button onClick={handlesubmit}>Refrescar la lista de videojuegos </button>
        <h2>Genres</h2>
        {
            Genre?.map(el=><button onClick={handleclick} value={el.Genre} key={el.Id}>{el.Genre}</button>)
        }
        <div>

        <button value='DB' onClick={handleClick}>CREATED VIDEOGAMES</button>
        <button value='API' onClick={handleClick}>API VIDEOGAMES</button>
        
        </div>
        <div>
            <h2>SORT BY RATING</h2>
        <button value='ASC' onClick={handleSort}>ASCENDENTE</button>
        <button value='DSC' onClick={handleSort}>DESCENDENTE</button>

        </div>
        <div>
            <h2>SORT BY NAME</h2>
        <button value='ASC' onClick={handleSortByName}>ASCENDENTE</button>
        <button value='DSC' onClick={handleSortByName}>DESCENDENTE</button>

        </div>

        </div>
      
    )
}
