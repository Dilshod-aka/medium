const {Router} = require("express");

const cardController = require("../controller/card.controller");

const getCard = require("../controller/card.controller");
const getCardById = require("../controller/card.controller");
const createCard = require("../controller/card.controller");
const putCard = require("../controller/card.controller");
const deleteCard = require("../controller/card.controller");


const router = Router();

router.get("/card", cardController.getCard);
router.get("/card/:id", cardController.getCardById);
router.post("/addCard", cardController.createCard);
router.put("/editCard/:id", cardController.putCard);
router.delete("/deleteCard/:id", cardController.deleteCard);

module.exports =  router;