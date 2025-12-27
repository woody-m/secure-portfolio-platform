function listProjects(req, res) {
  return res.status(200).json({
    message: 'Protected projects list',
    user: req.user
  });
}

module.exports = { listProjects };

