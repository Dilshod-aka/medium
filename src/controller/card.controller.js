const cardModel = require('../model/card.model');
const Joi = require("joi");


const getCard = async (req, res) => {
    try{
        const cards = await cardModel.getAllCard();
        res.status(200).json({status: 200, message: 'success', data: cards})
    } catch (error) {
        console.log(error)
    }
}

const getCardById = async (req, res) => {
    try{
        const {id} = req.params;
        const card = await cardModel.getCardById(id);
        if(!card) {
          return  res.status(404).json({status: 404, message: 'card not found', data: null})
        }
        return res.status(200).json({status: 200, message: 'success', data: card});
    } catch(error) {
        console.log(error);
    }
}

const createCard = async (req, res) => {
    try{
        const {title, text, image}  = req.body;

        const schema = Joi.object({
            title: Joi.string().min(3).max(500).required(),
            text: Joi.string().min(3).max(500).required(),
            image: Joi.string().min(3).max(500).required()
        });

        const {error} = schema.validate({title,text, image});
        if (error) return res.status(400).json({message: error.message});

        await cardModel.createCard(title, text, image);

        return res.status(200).json({message:"Success!"})

    } catch (error) {
        console.log(error)
    }
}

const putCard = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, text, image} = req.body;
        const card = await cardModel.updateCard(id,title, text, image);
        res.status(200).json({status: 200, message: 'success', data: card})
    } catch (error) {
        console.log(error)
    }
};

const deleteCard = async (req, res) => {
    try{
        const {id} = req.params;
        const card = await  cardModel.deleteCard(id);
        res.status(200).json({status: 200, message: 'success', data: card})
    } catch (error) {
        console.log(error)
    }
};



module.exports =  {
    getCard, getCardById, createCard, putCard, deleteCard
}