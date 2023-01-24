require('dotenv').config();
const express = require("express");

const { UserRouter } = require("./src/routes/user.routes");


const SetupandStartserver = async function () {

    const app = express();


    app.use(express.json());
    app.use(UserRouter);


    const PORT = process.env.PORT;
    app.listen(PORT, (req, res) => {
      console.log(`server started at 3000`);
    })
}

SetupandStartserver();