const express = require('express');
const bodyParser = require('body-parser');
const {join} = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/send-mail', async (req, res) => {
    // TODO send email now!

    res.json({
        message: `Yo! E-mail has been sent to: ${req.body.email}`
    })

});

app.listen(process.env.PORT || 8080, err => {
    if (err) throw err;
    console.log("server is up!")
});
