const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    ID:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
    ,
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    ,
    Descripcion:{
      type:DataTypes.TEXT,
      allowNull:false
    }
    ,
    Fecha:{
      type:DataTypes.STRING
    },
    Rating:{
      type:DataTypes.DECIMAL
    },
    Plataformas:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false,

    },
    Imagen:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
