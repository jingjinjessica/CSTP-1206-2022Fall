const express = require("express");
const app = express();
const PORT = 5000;
const path = require('path');



app.use(express.json());

app.get("/", (req, res) => {

    res.send("Welcome !")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});