const userSchema = require("./../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registration = async (req, res) => {
  const { username, email, contact, password } = req.body;

  if (!username || !email || !contact || !password) {
    return res.status(400).json({ message: "All fields are required" }); // Return here
  }

  const existEmail = await userSchema.findOne({ email: email });

  if (existEmail) {
    return res.status(400).json({ message: "Email Already Exists" }); // Return here
  }

  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new userSchema({
      username,
      email,
      contact,
      password: hashedPass,
    });
    await user.save();
    return res.status(201).json({ message: "Data Registered Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Registration Failed" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userSchema.findOne({ username: username });
  if (!user) {
    return res.status(400).json({ message: "User Not Exists" });
  } else {
    try {
      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Password" });
      } else {
        const token = jwt.sign(
          {
            id: user._id,
          },
          process.env.SECRETKEY,
          {
            expiresIn: "24h",
          }
        );
        return res
          .status(200)
          .json({ message: "Login Success", username, token ,contact:user.contact });
      }
    } catch (error) {
      return res.status(400).json({ message: "Failed" });
    }
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await userSchema.findOne({ _id: id });
  try {
    if (!user) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      return res.status(200).json({ message: "User Found", user });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
};

module.exports = { registration, login, getUser };
