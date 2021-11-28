//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios=require('axios')
const {API_KEY} = process.env; 
const {Genre} =require('./src/db.js')


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
/*
* * Traemos la data de los generos de la api para guardarla en la base de datos
*/
 axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
.then(response=>{
 let a=response.data.results
  let base= a.map(elemento=>

    Genre.create({
    Id:elemento.id,
    Name:elemento.name
    })
  
    );
    Promise.all(base)
    .then(()=>{
      console.log('Data creada')
    }
   
    )
})
.catch(error=>{
  console.log(error)
})

    
  });
});
