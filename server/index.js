const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({
        game: "Naija Life 🇳🇬",
        status: "Online",
        theme: "Red & Gold",
        message: "Welcome to the streets! Server backend is active."
    });
});

server.listen(PORT, () => {
    console.log(`[NAIJA LIFE] Game server backend running on port ${PORT}`);
});
