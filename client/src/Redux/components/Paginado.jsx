import React from 'react'
export default function Paginado({Pages,ChangePage}) {
function handleClick(e,number){
e.preventDefault()
ChangePage(number)
}
    return (
        <div>
       
           {Pages.map(el=><button key ={el} onClick={(e)=>handleClick(e,el)}>{el}</button>)
}
  

       
        </div>
    )
}
