const express = require('express');
const app = express();

// make public folder
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/jivika', (req, res) => {
    let { date, num } = req.query;
    // take current date 
    
    if (!date || date.trim() == '') {
        let today = new Date();
        let currentDate =  today.getDate();
        let currentMonth = today.getMonth() + 1;
        let currentYear =  today.getFullYear();
        date = `${currentDate}-${currentMonth}-${currentYear}`;
    }
    num = num || Math.floor(Math.random() * 10000) + 999;
    return res.render('index', { date, num });
});

app.get('/janvhi-wifi', (req, res) => {
    let { date, num } = req.query;
    // take current date 
    
    if (!date || date.trim() == '') {
        let today = new Date();
        let currentDate =  today.getDate();
        let currentMonth = today.getMonth() + 1;
        let currentYear =  today.getFullYear();
        date = `${currentDate}-${currentMonth}-${currentYear}`;
    }
    num = num || Math.floor(Math.random() * 10000) + 999;
    return res.render('index_E_Bill', { date, num });
});

app.get('/janvhi-cash', (req, res) => {
    let { date, num } = req.query;
    // take current date 
    
    if (!date || date.trim() == '') {
        let today = new Date();
        let currentDate =  today.getDate();
        let currentMonth = today.getMonth() + 1;
        let currentYear =  today.getFullYear();
        date = `${currentDate}-${currentMonth}-${currentYear}`;
    }
    num = num || Math.floor(Math.random() * 10000) + 999;
    return res.render('index_E_cash', { date, num });
});

app.get('*', (req, res) => {
    return res.send('Bhai ghar jaa, dimag mat kha ider')
});


app.listen(process.env.PORT || 3000);

