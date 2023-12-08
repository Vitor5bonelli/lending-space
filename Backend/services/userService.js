const User = require('../model/User');
const Lending = require('../model/Lending');


async function createUser(userData) {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUserById(userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function updateUser(userId, userData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteUser(userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUserItems(userId) {
    try {
        const user = await User.findById(userId).populate('lendables');
        if (!user) {
            throw new Error('User not found');
        }
        return user.lendables;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUserItemByName(userId, itemName) {
    try {
        const user = await User.findById(userId).populate({
            path: 'lendables',
            match: { nome: itemName }
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user.lendables.find(item => item.nome === itemName);
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUserLending(userId, lendingId) {
    try {
        const lending = await Lending.findOne({ _id: lendingId, idDono: userId });
        return lending;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllUserLendings(userId) {
    try {
        const lendings = await Lending.find({ idDono: userId });
        return lendings;
    } catch (error) {
        throw new Error(error.message);
    }
}



module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserItems,
    getUserItemByName,
    getUserLending,
    getAllUserLendings
};
