const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/database");

const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/payment");

const app = express();
dotenv.config();
connectDB();

var corsOptions = {
  origin: process.env.FRONTEND_LINK,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/users", userRoutes);

app.use("/payment", paymentRoutes);

app.use("/", (req, res) => {
  return res.json({ messsage: "incorre" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started at port: " + port);
});
