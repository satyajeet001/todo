const Contact = require("../models/user-models");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    console.log(req.body);
    return res.status(200).json({ message: req.body });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { contactForm };
