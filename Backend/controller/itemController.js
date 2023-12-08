const itemService = require('../services/itemService');

async function createItem(req, res) {
    const itemData = req.body;
    try {
        const newItem = await itemService.createItem(itemData);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getItems(req, res) {
    try {
        const items = await itemService.getItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getItemById(req, res) {
    const itemId = req.params.id;
    try {
        const item = await itemService.getItemById(itemId);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateItem(req, res) {
    const itemId = req.params.id;
    const itemData = req.body;
    try {
        const updatedItem = await itemService.updateItem(itemId, itemData);
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteItem(req, res) {
    const itemId = req.params.id;
    try {
        const deletedItem = await itemService.deleteItem(itemId);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};
