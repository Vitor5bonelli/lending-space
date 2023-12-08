const User = require('../model/User');


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

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};