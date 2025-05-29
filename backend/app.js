const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");

app.use(cors());

//database connection
require("./database/db")

const router = require("./router/router");
app.use("/", router)

const port = 2001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})