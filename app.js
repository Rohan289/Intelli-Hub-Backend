// app.js
const express = require('express');
const cors = require('cors');
const {ticketDetails,userData} = require("./ticketData");
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
app.get("/list_filtered_ticket_details", (req, res) => {
    const filters = req.query;
    const filteredTicket = ticketDetails.filter(ticket => {
        let isValid = true;
        for (key in filters) {
          isValid = isValid && ticket[key] == filters[key];
        }
        return isValid;
      });
      res.send(filteredTicket);
});
app.get('/user_details',(req,res) => {
    res.status(200).send(userData);
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('running on port 8080'));