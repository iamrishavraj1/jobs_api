const register = async (req, res) => {
  res.json({ TASK: "REGISTER" });
};

const login = async (req, res) => {
  res.json({ TASK: "LOGIN" });
};

module.exports = { register, login };
