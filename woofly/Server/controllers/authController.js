const User = require('../models/User');
const Provider = require('../models/Provider');

exports.registerUser = async (req, res) => {
  const { name, lastName, email, password, phone, address, pets } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está en uso.' });
    }

    const newUser = new User({
      name,
      lastName,
      email,
      password,
      phone,
      address,
      pets,
      isProvider: false
    });

    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

exports.registerProvider = async (req, res) => {
  const { name, email, password, phone, address, services } = req.body;
  try {
    const existingProvider = await Provider.findOne({ email });
    if (existingProvider) {
      return res.status(400).json({ message: 'El email ya está en uso.' });
    }

    const newProvider = new Provider({
      name,
      email,
      password,
      phone,
      address,
      isProvider: true
    });

    await newProvider.save();
    res.status(201).json({ message: 'Proveedor registrado exitosamente.' });
  } catch (error) {
    console.error('Error registering provider:', error);
    res.status(500).json({ message: 'Error registering provider' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await Provider.findOne({ email });
    }
    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

exports.checkEmailExists = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email }) || await Provider.findOne({ email });
    res.status(200).json({ exists: !!existingUser });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({ message: 'Error checking email' });
  }

};
