const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const lendingController = require('../controller/lendingController');
const itemController = require('../controller/itemController');

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

router.get('/:userId', userController.getUserById);

router.put('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

router.post('/:userId/items', itemController.createItem);
router.get('/:userId/items', userController.getUserItems);
router.get('/:userId/items/:name', userController.getUserItemByName);

router.post('/:userId/lendings', lendingController.createLending);
router.get('/:userId/lendings', userController.getAllUserLendings);
router.get('/:userId/lendings/:lendingId', userController.getUserLending);


module.exports = router;
