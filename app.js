var addDays = require('date-fns/addDays');
const express = require("express");
const app = express();

app.get("/" (request, Response) => {
    let todayDate = new Date();
    let date = addDays(new Date(todayDate.getDate(),todayDate.getMonth(),todayDate.getFullYear()),100);
    Response.send(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
});


app.listen(3000);
module.exports = app;