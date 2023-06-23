const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

// mongodb connecton
connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
})