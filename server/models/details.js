module.exports = (sequelize, DataTypes) => {
    const Details = sequelize.define('Details', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      image:{
        type: DataTypes.STRING,
        
      }
    
    },{
      tableName:"Details"
    });
  
    return Details;
  };
  
  