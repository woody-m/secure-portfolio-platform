const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new Database(dbPath);

// criar tabela se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    owner TEXT NOT NULL,
    createdAt TEXT NOT NULL
  )
`).run();

module.exports = db;

