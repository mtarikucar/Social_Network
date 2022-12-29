const express = require('express');

const { updateUser, deleteUser, getUser, getUsers, deleteUserPermanent } = require('../controllers/user');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = express.Router();

// PUT => /api/users/:id
router.patch('/:id', verifyTokenAndAuthorization, updateUser);

// DELETE => /api/users/:id
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

// DELETE => /api/users/admin/:id
router.delete('/admin/:id', verifyTokenAndAdmin, deleteUserPermanent);

// GET => /api/users/:id
router.get('/:id', getUser);           // must be here

// GET => /api/users
router.get('/', verifyTokenAndAdmin, getUsers);

module.exports = router;