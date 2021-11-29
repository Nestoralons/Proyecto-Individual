const { Router } = require('express');
const {getInfoApi,
    getinfoDB,
    geinfoquery,
    getinfoDBquery,
    getInfoApiDetallada,
    getinfoDBDetallada,
    getGenres,
    postVideogame,
    DBbuscadorGenre} = require('./Modelos')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


const getAllVideogames = async()=>{
    const API=await getInfoApi();
    //console.log(API)
    const DB=await getinfoDB();
    // ** Unimos los datos de la api y de la base de datos 
    let Info
    if(DB.length>0){
     Info=[...DB,...API,];
    }else{
     Info=API;
    } 
   
    return Info
}
const getAllVideogamesquery = async(nombre)=>{
    try {
        const API=await geinfoquery(nombre);

    const DB=await getinfoDBquery(nombre);

    // ** Unimos los datos de la api y de la base de datos 
    let Info
    if(DB.length){
     Info=[...DB,...API,];
    }else{
     Info=API;
    } 
   let b=Info.slice(0,15);
   console.log(b.length)
    return b}catch(error){
        console.log(error)
    }
}


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//**---------RUTA VIDEOGAMES Y POR BUSQUEDA CON QUERY --------*/
router.get('/videogames',async(req,res)=>{
    try{
        const {name}=req.query;   
     
        if(name){
            let base=await getAllVideogamesquery(name);
            // let filtro=await videojuegos.filter(elemento=>elemento.Nombre.toLowerCase().includes(decodeURI(name.toLowerCase())));
            base.length?res.status(200).send(base):res.status(404).send('VideoJuego No Encontrado, lo sentimos. Intente con otro nombre ');        
        }else{
            let videojuegos=await getAllVideogames();
        res.status(200).send(videojuegos);
       // console.log(videojuegos)
    }
         
    }catch(error){
       console.log(error)

    }

})



//**------ RUTA CON BUSQUEDA POR ID---------------- */
router.get('/videogames/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        if (!Number(id)){
         const Detalles =await getinfoDBDetallada(id);
         Detalles? res.status(200).send(Detalles): res.status(404).send('Algo ha salido mal, verifique el id suministrado')
        }
        if(Number(id)){
        const Detalles= await getInfoApiDetallada(id);
        Detalles? res.status(200).send(Detalles): res.status(404).send('Algo ha salido mal, verifique el id suministrado')
        }
    }catch(error){
        console.log(error)
    }
})

//** -------TRAEMOS LOS GENEROS DE LA API QUE ESTAN EN NUESTRA DB */
router.get('/Genres',async(req,res)=>{
    try{
    const Generos=await getGenres();
    if(Generos.length){
        res.status(200).send(Generos);
    }else{
        res.status(404).send('Algo ha salido mal')
    }

    }catch(error){

    }
})
//**-------CREACION DE VIDEOJUEGOS------- */
router.post('/videogames',async(req,res)=>{
    try{
    const{
        Nombre,Descripcion,Fecha,Rating,Imagen,Plataformas,Genre
    }=req.body;

    let Videojuego=await postVideogame( Nombre,Descripcion,Fecha,Rating,Imagen,Plataformas)
    //console.log(Videojuego)
    // for (let i=0;i<Genre.length;i++){
    // }
    let GenreDB=await DBbuscadorGenre(Genre);
        Videojuego.addGenre(GenreDB);
       // console.log(GenreDB)
    res.status(200).send('Videojuego creado exitosamente')
    }catch(error){
        console.log(error)
    }
})

module.exports = router;
