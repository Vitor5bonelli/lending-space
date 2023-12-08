const Item = require('../model/Item');

async function createItem(itemData) {
    try {
        const newItem = await Item.create(itemData);
        return newItem;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getItems() {
    try {
        const items = await Item.find();
        return items;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getItemById(itemId) {
    try {
        const item = await Item.findById(itemId);
        return item;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function updateItem(itemId, itemData) {
    try {
        const updatedItem = await Item.findByIdAndUpdate(itemId, itemData, { new: true });
        return updatedItem;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteItem(itemId) {
    try {
        const deletedItem = await Item.findByIdAndDelete(itemId);
        return deletedItem;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};
