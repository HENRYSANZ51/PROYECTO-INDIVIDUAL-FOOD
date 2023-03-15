const {Router} = require('express');
const {addAllDiets} = require('../handlers/handlers')

const dietsRouter = Router();

dietsRouter.get('/', addAllDiets)



module.exports = dietsRouter;