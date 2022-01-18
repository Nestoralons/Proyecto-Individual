import React from 'react';
import {Link} from 'react-router-dom';
import { getallvideogames } from "../actions/actions";
import {useEffect } from "react";
import {useDispatch} from 'react-redux';
export default function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getallvideogames())

  }, [dispatch])

    return (
        <div>
          <div>
         
          </div>
            <h2>Bienvenido</h2>
            
          <Link to='/Videogames'>
            <button>Ingresar</button>
          </Link>
         
        </div>
    )
}
