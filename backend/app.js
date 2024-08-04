const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cron = require("node-cron")

const connectDB = require("./config/database");

const userRoutes = require("./routes/userRoutes");
const planRoutes = require("./routes/planRoutes");
const couponRoutes = require("./routes/couponRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const { initUser } = require('./middlewares/authProtect')

const app = express();

dotenv.config();
connectDB();

// cron.schedule('* * * * * *', () => {
//   sendReminderForServiceExpiring();
// });

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
app.use(initUser)

app.use("/users", userRoutes);
app.use("/plans", planRoutes);
app.use("/coupons", couponRoutes);
app.use("/payment", paymentRoutes);

app.use("/", (req, res) => {
  return res.json({ messsage: "Invalid request" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started at port: " + port);
});
