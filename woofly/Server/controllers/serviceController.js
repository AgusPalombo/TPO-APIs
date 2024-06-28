const Service = require('../models/Service');

exports.createService = async (req, res) => {
  const { providerId, name, category, duration, frequency, cost } = req.body;
  try {
    const newService = new Service({
      provider: providerId,
      name,
      category,
      duration,
      frequency,
      cost
    });
    await newService.save();
    res.status(201).json({ message: 'Service created successfully' });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ message: 'Error creating service' });
  }
};

exports.getServicesByProvider = async (req, res) => {
  const { providerId } = req.params;
  try {
    const services = await Service.find({ provider: providerId });
    res.status(200).json(services);
  } catch (error) {
    console.error('Error getting services:', error);
    res.status(500).json({ message: 'Error getting services' });
  }
};
