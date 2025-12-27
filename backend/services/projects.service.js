const db = require('../database/db');

function getProjectsByOwner(owner) {
  return db
    .prepare('SELECT * FROM projects WHERE owner = ?')
    .all(owner);
}

function createProject({ title, description, owner }) {
  const createdAt = new Date().toISOString();

  const result = db.prepare(`
    INSERT INTO projects (title, description, owner, createdAt)
    VALUES (?, ?, ?, ?)
  `).run(title, description || '', owner, createdAt);

  return {
    id: result.lastInsertRowid,
    title,
    description: description || '',
    owner,
    createdAt
  };
}

function getProjectById({ id, owner }) {
  return db.prepare(
    'SELECT * FROM projects WHERE id = ? AND owner = ?'
  ).get(id, owner);
}

function updateProject({ id, title, description }) {
  db.prepare(`
    UPDATE projects
    SET title = COALESCE(?, title),
        description = COALESCE(?, description)
    WHERE id = ?
  `).run(title, description, id);

  return db.prepare(
    'SELECT * FROM projects WHERE id = ?'
  ).get(id);
}

function deleteProject({ id, owner }) {
  const result = db.prepare(
    'DELETE FROM projects WHERE id = ? AND owner = ?'
  ).run(id, owner);

  return result.changes;
}

module.exports = {
  getProjectsByOwner,
  createProject,
  getProjectById,
  updateProject,
  deleteProject
};

