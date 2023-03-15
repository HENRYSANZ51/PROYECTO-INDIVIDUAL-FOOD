const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    health_score:{
      type: DataTypes.STRING,
      allowNull: false
    },
    instrucciones:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    created:{
      type:DataTypes.BOOLEAN,
      defaultValue: true
    }

  }, { timestamps: false });
};
