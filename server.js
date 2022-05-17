const express = require('express')
const path = require("path");
const https = require("https");
const cors = require("cors");

const app = express()
const port = 443

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, './src')));

const options = {

};

let server = https.createServer(options, app);
server.listen(port, () => {
    console.log("Listening on port " + port);
});
