const express = require("express");

const { UserRouter } = require("./src/routes/user.routes");


const SetupandStartserver = async function () {

    const app = express();


    app.use(express.json());
    app.use(UserRouter);


    app.listen(4000, () => {
        console.log("Server Started at 4000");
    })
}

SetupandStartserver();