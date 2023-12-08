const userService = require('../services/userService');

async function createUser(req, res) {
    try {
        const userData = req.body; 
        const newUser = await userService.createUser(userData);
        res.status(201).json(newUser); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUserById(req, res) {
    const userId = req.params.userId;
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateUser(req, res) {
    const userId = req.params.userId;
    const userData = req.body;
    try {
        const updatedUser = await userService.updateUser(userId, userData);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteUser(req, res) {
    const userId = req.params.userId;
    try {
        const deletedUser = await userService.deleteUser(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUserItems(req, res) {
    const userId = req.params.userId;
    try {
        const userItems = await userService.getUserItems(userId);
        res.status(200).json(userItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUserItemByName(req, res) {
    const userId = req.params.userId; 
    const itemName = req.params.name;
    try {
        const userItem = await userService.getUserItemByName(userId, itemName);
        if (!userItem) {
            return res.status(404).json({ message: 'Item not found for this user' });
        }
        res.status(200).json(userItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUserLending(req, res) {
    const userId = req.params.userId;
    const lendingId = req.params.lendingId;
    try {
        const lending = await userService.getUserLending(userId, lendingId);
        if (!lending) {
            return res.status(404).json({ message: 'Lending not found for this user' });
        }
        res.status(200).json(lending);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllUserLendings(req, res) {
    const userId = req.params.userId;
    try {
        const lendings = await userService.getAllUserLendings(userId);
        res.status(200).json(lendings);
    } catch (error) {
        res.status(500).json({ error: error.message });
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