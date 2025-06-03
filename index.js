require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for FCC testing
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files (e.g., style.css)
app.use(express.static('public'));

// Serve HTML from views folder
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

// ✅ Your required endpoint
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Listen on the correct port
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
    message: "Scouted by the Straw Hat crew 🏴‍☠️"
  });
});