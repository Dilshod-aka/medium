const {fetch, fetchOne} = require("../utils/config")


const getAllCard = async () => {
    try{
        const card = await fetch('SELECT * FROM cards;')
        return card;
    } catch ( error) { 
        console.log(error)
    }
}

const getCardById = async (id) => {
    try{
        const card = await fetchOne('SELECT * FROM cards WHERE id = $1', id);
        return card;
    } catch ( error) { 
        console.log(error)
    }
}

const createCard = async (title, text, image) => {
    try{
        const card = await fetchOne('INSERT INTO cards ( title, text, image) VALUES ($1, $2, $3) RETURNING *', title, text, image);
        return card;
    } catch (error) {
        console.log(error)
    }
} 

const updateCard = async (id, title, text, image) => {
    try{
        const card = await fetch(
            `UPDATE cards SET title = $2, text = $3, image = $4 WHERE id = $1`,
            id, title, text, image
        );
        return card;
    } catch (error) {
        console.log(error)
    }
} 

const deleteCard = async (id) => {
    try{
        const card = await fetchOne(
            `DELETE FROM cards WHERE id = $1`,
            id
        );
        return card;
    } catch (error) {
        console.log(error)
    }
} 

module.exports =  {
    getAllCard,
    getCardById,
    createCard,
    updateCard,
    deleteCard
}