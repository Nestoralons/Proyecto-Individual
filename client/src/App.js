import './App.css';
import {Routes,Route} from 'react-router-dom';
import Landing from '../src/Redux/components/Landing'
import React from 'react';
import Home from '../src/Redux/components/Home'
import Detail from './Redux/components/Detail';
import Nav from './Redux/components/Nav';



function App() {
  return (
    <div >
     <Routes>
     <Route exact path="/" element={<Landing/>}/>
     <Route path='/Videogames/:ID' element={<Detail/>}/>
    <Route path='/Videogames' element={<Home/>}/>
    <Route path='/Videogames/Nav' element={<Nav/>}/>
    
     </Routes>


    </div>
  );
}

export default App;
