// app.js
const express = require('express');
const cors = require('cors');
const {ticketDetails} = require("./covidData");
const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Hello!'));
app.get('/list_ticket_details',(req,res) => {
    let response = [];
    ticketDetails.map((element) => {
        response.push(element);
    });
    res.status(200).send(response);
})
app.listen(8080, () => console.log('running on port 8080'));