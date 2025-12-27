const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Simples para MVP (depois podemos ir para DB)
const adminUser = {
  id: 1,
  email: 'admin@portfolio.dev',
  // senha: admin123
  passwordHash: bcrypt.hashSync('admin123', 10)
};

function authenticate(email, password) {
  if (email !== adminUser.email) {
    return null;
  }

  const passwordValid = bcrypt.compareSync(password, adminUser.passwordHash);
  if (!passwordValid) {
    return null;
  }

  const token = jwt.sign(
    { id: adminUser.id, email: adminUser.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return token;
}

module.exports = { authenticate };

