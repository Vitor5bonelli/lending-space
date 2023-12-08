const Lending = require('../model/Lending');
const User = require('../model/User');

async function createLending(lendingData) {
    try {
        const newLending = await Lending.create(lendingData);

        await User.findByIdAndUpdate(lendingData.idMutuario, { $push: { lends: newLending._id } });

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
        const currentLending = await Lending.findById(lendingId);
        const previousMutuarioId = currentLending.idMutuario;

        const updatedLending = await Lending.findByIdAndUpdate(lendingId, lendingData, { new: true });

        if (previousMutuarioId !== updatedLending.idMutuario) {
            await User.findByIdAndUpdate(previousMutuarioId, { $pull: { lends: lendingId } });
            await User.findByIdAndUpdate(updatedLending.idMutuario, { $push: { lends: lendingId } });
        }

        return updatedLending;
    } catch (error) {
        throw new Error(error.message);
    }
}


async function deleteLending(lendingId) {
    try {
        const deletedLending = await Lending.findByIdAndDelete(lendingId);

        const lending = await Lending.findById(lendingId);
        await User.findByIdAndUpdate(lending.idMutuario, { $pull: { lends: lendingId } });

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
