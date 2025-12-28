const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const {
  listProjects,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projects.controller');

const router = express.Router();

// todas protegidas
router.use(authMiddleware);

router.get('/', listProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
