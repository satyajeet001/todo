require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/routes");
const connectDB = require("./utils/db");
const PORT = process.env.PORT || 6010;
const app = express();

const corsOptions = {
  origin: ["https://todo-sigma-liart.vercel.app/"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });
});
