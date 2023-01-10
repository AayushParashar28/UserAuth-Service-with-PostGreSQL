const { Console } = require("console");
const express = require("express");


const SetupandStartserver = async function () {

    const app = express();


    app.use(express.json());


    app.listen(4000, () => {
        console.log("Server Started at 4000");
    })
}

SetupandStartserver();