const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Provider = require('../models/Provider');

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, phone, address, pets } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, password: hashedPassword, phone, address, pets });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

const registerProvider = async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  try {
    const provider = new Provider({ firstName, lastName, email, phone });
    await provider.save();
    res.status(201).json({ message: 'Provider registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering provider' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

module.exports = { registerUser, registerProvider, loginUser };
