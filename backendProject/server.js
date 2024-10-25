require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { route } = require("./routes/userRoutes");
const app = express();
require("./config/db");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productsRoutes");
const contactRouter = require("./routes/contactRoutes");

const PORT = 5001;
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(express.static("assets"));
const path = require("path");
app.use("/assets", express.static(path.join(__dirname, "assets")));

const corsOptions = {
  origin: "http://localhost:3000", // Allow only requests from this origin
  methods: "GET,POST,PUT,DELETE", // Allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
