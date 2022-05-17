const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, './src')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


