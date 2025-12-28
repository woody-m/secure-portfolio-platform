const { authenticate } = require('../services/auth.service');

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const token = await authenticate(email, password);

  if (!token) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json({ token });
}

module.exports = { login };
