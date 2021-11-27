const {DataTypes}=require('sequelize');

module.export=(Sequelize)=>{
    Sequelize.define('Genre',{
            Id:{
                type:DataTypes.INTEGER
            },
            Name:{
                type:DataTypes.STRING,
                allowNull:false
            }
    })
}