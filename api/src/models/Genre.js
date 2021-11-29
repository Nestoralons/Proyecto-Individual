const {DataTypes}=require('sequelize');

module.exports=(Sequelize)=>{
    Sequelize.define('genre',{
            Id:{
                type:DataTypes.INTEGER
            },
            Genre:{
                type:DataTypes.STRING,
                allowNull:false
            }
})
};