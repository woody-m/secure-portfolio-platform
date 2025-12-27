let projects = [];
let nextId = 1;

// GET /projects
function listProjects(req, res) {
  return res.json(projects);
}

// POST /projects
function createProject(req, res) {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const project = {
    id: nextId++,
    title,
    description: description || '',
    owner: req.user.email,
    createdAt: new Date()
  };

  projects.push(project);
  return res.status(201).json(project);
}

// PUT /projects/:id
function updateProject(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  const project = projects.find(p => p.id === Number(id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  if (title !== undefined) project.title = title;
  if (description !== undefined) project.description = description;

  return res.json(project);
}

// DELETE /projects/:id
function deleteProject(req, res) {
  const { id } = req.params;

  const index = projects.findIndex(p => p.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Project not found' });
  }

  projects.splice(index, 1);
  return res.status(204).send();
}

module.exports = {
  listProjects,
  createProject,
  updateProject,
  deleteProject
};

