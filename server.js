const express = require("express");
const path = require("path")

const app = express();
const port = process.env.PORT || 3001;

const publicPath = path.join(__dirname, 'public');
/*

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})


app.use(express.static(path.join(__dirname, '../build')))*/

/*
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})
*/

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
