const userModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");

async function findUserByEmail(email) {
  return await userModel.findOne({ email });
}

async function createUser(fullname, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });
  return user;
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = {
  findUserByEmail,
  createUser,
  validatePassword,
};
