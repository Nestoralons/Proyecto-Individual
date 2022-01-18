import {
    GET_ALL_VIDEOGAMES,
     GET_DETAIL,
     GET_GENRES,
     GET_VIDEOGAMES_NAME,
     FILTER, 
     FILTER_CREATED,
     SORT_BY,
     SORT_BY_NAME,
     GET_ALL
} from '../actions/actions'

// CREATE_VIDEOGAME
const initialState={
    AllVideogames:[],
    Videogames:[],
    Videogame:{},
    NameVideogame:[],
    Genre:[], 
    Plataformas:[]

}


export default function rootReducer(state=initialState,action) {
   switch (action.type){
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                Videogames:action.payload,
                AllVideogames:action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                Videogame:action.payload
            }
        case GET_GENRES:
            return{
                ...state,
                Genre:action.payload
            }
        case GET_VIDEOGAMES_NAME:{
            return {
                ...state,
                Videogames:action.payload
            }
        } 
        case FILTER:{
            let filtrado=state.AllVideogames;
            let filtro=filtrado.filter(el=>el.Genre.includes(action.payload))

            return {
                ...state,
                Videogames:filtro

            }
        }
        case  FILTER_CREATED:
            let filtrado=state.AllVideogames;
            let valor=action.payload
           let filtrogenero= valor==='API'? filtrado.filter(el=>typeof(el.ID)==='number'
            ): filtrado.filter(el=>typeof(el.ID)==='string')
        return {
        ...state,
        Videogames:filtrogenero
        }
        case SORT_BY:{
            let sort=state.AllVideogames;
            let sortby=action.payload==='ASC'? sort.sort((a,b)=>a.Rating-b.Rating):sort.sort((a,b)=>b.Rating-a.Rating);
            return {
                ...state,
                Videogames:sortby
            }
        }case SORT_BY_NAME:{
            let sort=state.AllVideogames;
            let sortbyname=action.payload==='ASC'? sort.sort((a,b)=>{
                if (a.Nombre > b.Nombre) {
                      return 1;
                    }
                    if (a.Nombre < b.Nombre) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;}
                  
        
            ):sort.sort((a,b)=>{
                if (a.Nombre > b.Nombre) {
                      return -1;
                    }
                    if (a.Nombre < b.Nombre) {
                      return 1;
                    }
                    // a must be equal to b
                    return 0;}
                  
        
            );
            return {
                ...state,
                Videogames:sortbyname
            }
        }
        case GET_ALL:{
            let info=state.AllVideogames;
            function mapeo(data){
                let array=[];
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].Plataformas.length; i++) {
                   if (!array.includes(data[i].Plataformas[j])){
                       array.push(data[i].Plataformas[j])
                   }
                    }
                    
                }
                return array
            }
            let Data=mapeo(info)
            return {
                ...state,
                Plataformas:Data

            }
        }
        default: return state;
   }

}
