const express = require("express");
const path = require("path")
const ses = require("./src/server/mailgun");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.post("/inquiry", async (req, res) => {
    const body = req.body
    console.log(body)

    const context = {
        address: body.address,
        canText:  body.canText,
        city: body.city,
        description: body.description,
        email: body.email,
        firstName:  body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        state: body.state,
        timeline: body.timeline,
        zip: body.zip
    };

    await ses.sendEmail( body.email, context).then(function (data) {
        console.log(data)
        res.status(200).json("Successful")
    }).catch(function (error) {
        console.log(error)
        res.status(500).json({
            message: "Could not complete pinata pin"
        })

    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
