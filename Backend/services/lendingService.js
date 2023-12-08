const Lending = require('../models/Lending');

async function createLending(lendingData) {
    try {
        const newLending = await Lending.create(lendingData);
        return newLending;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getLendings() {
    try {
        const lendings = await Lending.find();
        return lendings;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getLendingById(lendingId) {
    try {
        const lending = await Lending.findById(lendingId);
        return lending;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function updateLending(lendingId, lendingData) {
    try {
        const updatedLending = await Lending.findByIdAndUpdate(lendingId, lendingData, { new: true });
        return updatedLending;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteLending(lendingId) {
    try {
        const deletedLending = await Lending.findByIdAndDelete(lendingId);
        return deletedLending;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createLending,
    getLendings,
    getLendingById,
    updateLending,
    deleteLending
};
