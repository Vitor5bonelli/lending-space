const lendingService = require('../services/lendingService');

async function createLending(req, res) {
    const lendingData = req.body;
    try {
        const newLending = await lendingService.createLending(lendingData);
        res.status(201).json(newLending);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getLendings(req, res) {
    try {
        const lendings = await lendingService.getLendings();
        res.status(200).json(lendings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getLendingById(req, res) {
    const lendingId = req.params.id;
    try {
        const lending = await lendingService.getLendingById(lendingId);
        if (!lending) {
            return res.status(404).json({ message: 'Lending not found' });
        }
        res.status(200).json(lending);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateLending(req, res) {
    const lendingId = req.params.id;
    const lendingData = req.body;
    try {
        const updatedLending = await lendingService.updateLending(lendingId, lendingData);
        if (!updatedLending) {
            return res.status(404).json({ message: 'Lending not found' });
        }
        res.status(200).json(updatedLending);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteLending(req, res) {
    const lendingId = req.params.id;
    try {
        const deletedLending = await lendingService.deleteLending(lendingId);
        if (!deletedLending) {
            return res.status(404).json({ message: 'Lending not found' });
        }
        res.status(200).json({ message: 'Lending deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createLending,
    getLendings,
    getLendingById,
    updateLending,
    deleteLending
};
