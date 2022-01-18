require("dotenv").config()
const axios=require('axios')
const {API_KEY} = process.env; 

const {Videogame, Genre,Op}=require('../db.js')


 

module.exports={
    getInfoApi:async ()=>{
        try
        {

        let result=[];
             for (let n=1;n<6;n++){
            const url= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${n}`);
        
        const mapeo= await url.data.results.map(elemento=>{
            return{
            ID:elemento.id,
            Nombre:elemento.name,
            Genre:elemento.genres.map(element=>element.name),
            Imagen:elemento.background_image,
            Rating:elemento.rating,
            Plataformas:elemento.platforms.map(element=>element.name)
            }
        }) 
        result=[...result,...mapeo];
     
    }
    
        return result
    }catch(error){
        // console.log('Los objetivos no fuero logrados camarada')   
    console.log(error) }
    },
    
    getinfoDB:async ()=>{
    try {
        const Mapeo=await Videogame.findAll({
        attributes:['Nombre','ID','Imagen','Rating','Plataformas'],
        include:{
        model:Genre,
        attributes:['Genre'],
        through:{
            attributes:[]
        }
    }
        // * * Otra forma de hacerlo un poco mas corta 
        //includes:Genre
    })
    const Result=Mapeo.map(elemento=>{
        return {
        
            ID:elemento.ID,
            Nombre:elemento.Nombre,
            Genre:elemento.genres.map(element=>element.Genre),
            Imagen:elemento.Imagen,
            Rating:elemento.Rating,
            Plataformas:elemento.Plataformas
        }
    })
    return Result
}catch(error){
        return error
    }
    },
    geinfoquery:async(nombre)=>{
        try
        {const data=await axios.get(`https://api.rawg.io/api/games?search=${nombre}&key=${API_KEY}`)
        const mapeo=await data.data.results.map(elemento=>{
            return {
                ID:elemento.id,
            Nombre:elemento.name,
            Genre:elemento.genres.map(element=>element.name),
            Imagen:elemento.background_image,
            
            }
        })
        const filtro=await mapeo.filter(elemento=>elemento.Nombre.toLowerCase().includes(nombre.toLowerCase())&&elemento.Genre.length>0)
        
        return filtro}catch(error){
            console.log(error)}
    },
    getinfoDBquery:async (nombre)=>{
        try {
            const mapeo=await Videogame.findAll({
                where:{
                    Nombre:{
                        [Op.substring]:nombre
                    }
                },
             attributes:['Nombre','Imagen','ID'],
            include:{
            model:Genre,
            attributes:['Genre'],
            through:{
                attributes:[]
            }
        }
            
        })
    const filtro=mapeo.map(elemento=>{
        return {
            ID:elemento.ID,
            Nombre:elemento.Nombre,
            Genre:elemento.genres.map(element=>element.Genre),
            Imagen:elemento.Imagen,
            Descripcion:elemento.Descripcion,
            Fecha:elemento.Fecha,
        }
    })
    return filtro
    
    
    
    }catch(error){
            return error
        }
        },
    getInfoApiDetallada: async (id)=>{
       try{ const data= await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        const detalles= {
            
                ID:data.data.id,
                Nombre:data.data.name,
                Genre:data.data.genres.map(element=>element.name),
                Descripcion:data.data.description,
                Imagen:data.data.background_image,
                Fecha:data.data.released,
                Rating:data.data.rating,
                Plataformas:data.data.parent_platforms.map(element=>element.platform.name)
                
        }
         
        
        return detalles
    }catch(error){
        console.log(error)
    }},
    getinfoDBDetallada:async (id)=>{
   try {const mapeo= await Videogame.findAll({
        where:{
            ID:id
        },
        attributes:['ID','Nombre','Fecha','Imagen','Plataformas','Rating','Descripcion'],
        include:{
        model:Genre,
        attributes:['Genre'],
        through:{
            attributes:[]
        }
    }
        
    })
    const filtro=mapeo.map(elemento=>{

                return {
                ID:elemento.ID,
                Nombre:elemento.Nombre,
                Genre:elemento.genres.map(element=>element.Genre),
                Descripcion:elemento.Descripcion,
                Imagen:elemento.Imagen,
                Fecha:elemento.Fecha,
                Rating:elemento.Rating,
                Plataformas:elemento.Plataformas}
    })
   
    return filtro[0]}catch(error){
        console.log(error)
    }
    },
    getGenres:async()=>{
        return await Genre.findAll({

            attributes:  ['Id','Genre'],
            order:[['Genre','ASC']]
        }
        )
    }, 
    postVideogame:async(Nombre,Descripcion,Fecha,Rating,Imagen,Plataformas)=>{
        return await Videogame.create({
            Nombre,
            Descripcion,
            Fecha,
            Rating,
            Imagen,
            Plataformas
        })
    },
    DBbuscadorGenre:async(Genero)=>{
        return await Genre.findAll({
            where:{
                Genre:Genero
            }
        })
    }
    
    
}