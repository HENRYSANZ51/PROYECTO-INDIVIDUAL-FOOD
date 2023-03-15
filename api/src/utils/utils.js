const { Diets } = require("../db");

const loadDiets = async () => {
  const datosDiets = [
    { id: 1, nombre: "Gluten Free" },
    { id: 2, nombre: "Ketogenic" },
    { id: 3, nombre: "Vegetarian" },
    { id: 4, nombre: "Lacto-Vegetarian" },
    { id: 5, nombre: "Ovo-Vegetarian" },
    { id: 6, nombre: "Vegan" },
    { id: 7, nombre: "Pescetarian" },
    { id: 8, nombre: "Paleo" },
    { id: 9, nombre: "Primal" },
    { id: 10, nombre: "Low FODMAP" },
    { id: 11, nombre: "Whole30" },
  ];

  await Diets.bulkCreate(datosDiets);
};

module.exports = {loadDiets};
