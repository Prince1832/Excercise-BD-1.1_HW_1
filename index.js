// Solution - 1
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/whisper", (req, res) => {
    let Name = req.query.name.toLowerCase();
    console.log(Name);
    res.send(`<h3>${Name}</h3>`);
});

// Solution - 2
app.get("/full-product-name", (req, res) => {
    let companyName = req.query.companyName;
    let productName = req.query.productName;
    let fullProductName = `${companyName} ${productName}`;
    res.send(`<h3>${fullProductName}</h3>`);
});

// Solution - 3
app.get("/date", (req, res) => {
    let day = req.query.day;
    let month = req.query.month;
    let year = req.query.year;
    let formattedDate = `${day}/${month}/${year}`;
    res.send(`<h3>${formattedDate}</h3>`);
});

// Solution - 4
app.get("/greet", (req, res) => {
    let city = req.query.city;
    let greeting = `I am living in ${city}`;
    res.send(greeting);
});

// Solution - 5
app.get("/capital", (req, res) => {
    let capital = req.query.capital;
    let country = req.query.country;
    let countryCapital = `${capital} is the capital of ${country}.`;
    res.send(countryCapital);
});

// Solution - 6
app.get("/email", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let domain = req.query.domain;
    let emailFormatted = `${firstName}.${lastName}@${domain}`;
    res.send(emailFormatted);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
