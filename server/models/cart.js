module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      purchasedAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    },{
      tableName:"Cart"
    });
  
    return Cart;
  };
  