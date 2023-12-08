const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.get('/:id/items', userController.getUserItems);

router.get('/:id/items/:name', userController.getUserItemByName);

module.exports = router;
