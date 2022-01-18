import React  from "react";
import {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import Videogame from "./Videogame";
import Paginado from "./Paginado";
import { getallvideogames } from "../actions/actions";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
// import {Link} from 'react-router-dom';
export default function Home() {
    
    const videogames=useSelector((state)=>state.Videogames);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallvideogames())
    }, [dispatch])
    const [Page,setPage]=useState(1) 
    const [orden,setOrden]=useState('')
    let Count=videogames.length;
    let AmountPerpage=15;
    let end=AmountPerpage*Page;
    let Begin=end-AmountPerpage;
    let Pages=[];
    for(let i=0;i<Math.ceil(Count/AmountPerpage);i++){
                Pages.push(i+1)
            }
    let ChangePage=(Pagenumber)=>{
        setPage(Pagenumber)
        setOrden(`Orden:${Pagenumber*Math.random()}`)
    }
    const array=videogames.slice(Begin,end)
    

    return (
        <div>
          <h1>
              Welcome enjoy the games
          </h1>
      <SearchBar/>
        <div>
            <Nav ChangePage={ChangePage}/>
        </div>


          <Paginado Pages={Pages} ChangePage={ChangePage}  />
         

    
    {array? array.map((el)=>{
        return(

                <Videogame Nombre={el.Nombre} Genre={el.Genre} Imagen={el.Imagen} key={el.ID} ID={el.ID}/>
            
        )

        
    }):<p>Loading</p>}
          
        </div>
    )
}
