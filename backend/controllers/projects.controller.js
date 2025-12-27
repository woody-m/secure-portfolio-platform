const db = require('../database/db');

// GET /projects
function listProjects(req, res) {
  const projects = db
    .prepare('SELECT * FROM projects WHERE owner = ?')
    .all(req.user.email);

  return res.json(projects);
}

// POST /projects
function createProject(req, res) {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const createdAt = new Date().toISOString();

  const result = db.prepare(`
    INSERT INTO projects (title, description, owner, createdAt)
    VALUES (?, ?, ?, ?)
  `).run(title, description || '', req.user.email, createdAt);

  const project = {
    id: result.lastInsertRowid,
    title,
    description: description || '',
    owner: req.user.email,
    createdAt
  };

  return res.status(201).json(project);
}

// PUT /projects/:id
function updateProject(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  const project = db.prepare(
    'SELECT * FROM projects WHERE id = ? AND owner = ?'
  ).get(id, req.user.email);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  db.prepare(`
    UPDATE projects
    SET title = COALESCE(?, title),
        description = COALESCE(?, description)
    WHERE id = ?
  `).run(title, description, id);

  const updated = db.prepare(
    'SELECT * FROM projects WHERE id = ?'
  ).get(id);

  return res.json(updated);
}

// DELETE /projects/:id
function deleteProject(req, res) {
  const { id } = req.params;

  const result = db.prepare(
    'DELETE FROM projects WHERE id = ? AND owner = ?'
  ).run(id, req.user.email);

  if (result.changes === 0) {
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

