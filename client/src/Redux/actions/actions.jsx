import axios from 'axios';
export const GET_ALL_VIDEOGAMES='GET_ALL_VIDEOGAMES';
export const GET_DETAIL='GET_DETAIL';
export const GET_VIDEOGAMES_NAME='GET_VIDEOGAMES_NAME';
export const CREATE_VIDEOGAME='CREATE_VIDEOGAME';
export const GET_GENRES='GET_GENRES';
export const FILTER='FILTER';
export const FILTER_CREATED='FILTER_CREATED';
export const SORT_BY='SORT_BY';
export const SORT_BY_NAME='SORT_BY_NAME';
export const GET_ALL='GET_ALL';
export const POST='POST';

export function getallvideogames(){
    return async function(dispatch){
        let info=await axios.get('http://localhost:3001/videogames');
        return dispatch({
        type:GET_ALL_VIDEOGAMES,payload:info.data
        })
    }
}
export function getvideogame(id){
    return async function(dispatch){
        let info=await axios.get(`http://localhost:3001/videogames/${id}`);
        return dispatch({
        type:GET_DETAIL,payload:info.data
        })
    }
}
export function getgenre() {
    return async function(dispatch){
let genre=await axios.get(`http://localhost:3001/Genres`)
        return dispatch({
            type:GET_GENRES,
            payload:genre.data
        })
    }
}

export function getvideogamename(name){
    return async function(dispatch){
        let info=await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
        type:GET_VIDEOGAMES_NAME,payload:info.data
        })
    }
}
export function filter(payload){
    return{
type:FILTER,
payload:payload        
    }
}
export function filtercreate(payload){
    return{
type:FILTER_CREATED,
payload:payload        
    }
}
export function SortBy(payload){
    return{
type:SORT_BY,
payload:payload        
    }
}
export function sortbyname(payload){
    return{
type:SORT_BY_NAME,
payload:payload        
    }
}
export function getallPlatform(){
    return async function(dispatch){
        let info=await axios.get('http://localhost:3001/videogames');
        return dispatch({
        type:GET_ALL,payload:info.data
        })
    }
}

// let id=0;
export function Post(payload){
    return async function(dispatch){
        let info=await axios.post('http://localhost:3001/videogames',payload);
        console.log(info)
        return info
    }
}