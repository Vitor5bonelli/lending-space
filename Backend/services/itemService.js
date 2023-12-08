const Item = require('../model/Item');
const User = require('../model/User');

async function createItem(itemData) {
    try {
        const newItem = await Item.create(itemData);

        await User.findByIdAndUpdate(itemData.idDono, { $push: { lendables: newItem._id } });

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
        const currentItem = await Item.findById(itemId);
        const previousOwnerId = currentItem.idDono;

        const updatedItem = await Item.findByIdAndUpdate(itemId, itemData, { new: true });

        if (previousOwnerId !== updatedItem.idDono) {
            await User.findByIdAndUpdate(previousOwnerId, { $pull: { lendables: itemId } });
            await User.findByIdAndUpdate(updatedItem.idDono, { $push: { lendables: itemId } });
        }

        return updatedItem;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteItem(itemId) {
    try {
        const deletedItem = await Item.findByIdAndDelete(itemId);

        const item = await Item.findById(itemId);
        await User.findByIdAndUpdate(item.idDono, { $pull: { lendables: itemId } });

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
