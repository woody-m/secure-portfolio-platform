const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { listProjects } = require('../controllers/projects.controller');

const router = express.Router();

// rota protegida
router.get('/', authMiddleware, listProjects);

module.exports = router;

