const formData = require('form-data');
const Mailgun = require('mailgun.js');
const fs = require("fs")
const path = require("path");
const mjml2html = require("mjml");
const handlebars = require("handlebars")

const API_KEY = process.env.MAILGUN_API_KEY;
const USERNAME = process.env.MAILGUN_USER_NAME;
const DOMAIN = 'goatpasture.xyz';

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: USERNAME, key: API_KEY});

handlebars.registerHelper('ifEquals', function(v1, v2, options) {
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

const template = fs.readFileSync(path.resolve(__dirname, "./template.html"));

exports.sendEmail = async function (email, context) {
    const templateCompiled = handlebars.compile(template.toString())
    const mjml = templateCompiled(context);
    const mjmlOutput = mjml2html(mjml);

    const messageData = {
        from: 'TerraFirma <contact@terrafirmacabinetry.com>',
        to: 'TerraFirma <contact@terrafirmacabinetry.com>',
        subject: 'Customer Inquiry',
        html: mjmlOutput.html
    };

    return await client.messages.create(DOMAIN, messageData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });
};


