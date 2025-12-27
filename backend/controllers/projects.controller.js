const projectsService = require('../services/projects.service');

// GET /projects
function listProjects(req, res) {
  const projects = projectsService.getProjectsByOwner(req.user.email);
  return res.json(projects);
}

// POST /projects
function createProject(req, res) {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const project = projectsService.createProject({
    title,
    description,
    owner: req.user.email
  });

  return res.status(201).json(project);
}

// PUT /projects/:id
function updateProject(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  const existing = projectsService.getProjectById({
    id,
    owner: req.user.email
  });

  if (!existing) {
    return res.status(404).json({ message: 'Project not found' });
  }

  const updated = projectsService.updateProject({
    id,
    title,
    description
  });

  return res.json(updated);
}

// DELETE /projects/:id
function deleteProject(req, res) {
  const { id } = req.params;

  const deleted = projectsService.deleteProject({
    id,
    owner: req.user.email
  });

  if (!deleted) {
    return res.status(404).json({ message: 'Project not found' });
  }

  return res.status(204).send();
}

module.exports = {
  listProjects,
  createProject,
  updateProject,
  deleteProject
};

