const { login, register } = require('../controllers/auth');

const router = require('express').Router();

// POST => /api/auth/register
router.post('/register', register);

// POST => /api/auth/login
router.post('/login', login);

module.exports = router;