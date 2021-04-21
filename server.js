const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));