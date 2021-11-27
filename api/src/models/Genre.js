const {DataTypes}=require('sequelize');

module.exports=(Sequelize)=>{
    Sequelize.define('Genre',{
            Id:{
                type:DataTypes.INTEGER
            },
            Name:{
                type:DataTypes.STRING,
                allowNull:false
            }
    })
};