const contactSchema = require("../models/contactModel");

const contactUs = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new contactSchema({
      name,
      email,
      subject,
      message,
    });
    await newContact.save();
    res.status(200).json({ message: "Message sent Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending message" });
  }
};

module.exports = { contactUs };
