const express = require('express');
const fs = require('fs');
const {v5: uuidv5} = require('uuid');
const cors = require('cors');
const {configDotenv} = require("dotenv");
require('dotenv').config()

const app = express();
configDotenv({
    path: "../.env"
})
app.use(express.json());

if (process.env.REACT_APP_PRODUCTION_MODE == 1) {
    app.use(cors({origin: '*'})); // Allow all origin for testing purpose
} else {
    app.use(cors({origin: process.env.REACT_APP_URL})); // Allow just specific origin for production
}

app.post('/create', cors(), (req, res) => {
    if (req.body.uuid) {
        const uniqueId = uuidv5(req.body.uuid, process.env.REACT_APP_UUID_CONSTANT);
        const jsonFilename = `keys/${uniqueId}.json`;
        fs.writeFileSync(jsonFilename, JSON.stringify([], null, 2));
        res.json({url: `${uniqueId}`});
    }
});

app.use('/catch/:id', cors(), (req, res) => {
    const requestId = req.params.id;
    const jsonFilename = `keys/${requestId}.json`;
    if (!fs.existsSync(jsonFilename)) {
        fs.writeFileSync(jsonFilename, JSON.stringify([], null, 2));
    }
    let actual_json = fs.readFileSync(jsonFilename, 'utf-8');
    actual_json = JSON.parse(actual_json);

    actual_json.push({
        method: req.method,
        url: req.url,
        data: req.body,
        headers: req.headers,
        time: getCurrentTime(),
    });
    fs.writeFileSync(jsonFilename, JSON.stringify(actual_json, null, 2));

    res.status(202).json({
        status: 'success'
    });
});

app.use('/log/:id', cors(), (req, res) => {
    const requestId = req.params.id;
    const jsonFilename = `keys/${requestId}.json`;
    if (!fs.existsSync(jsonFilename)) {
        fs.writeFileSync(jsonFilename, JSON.stringify([], null, 2));
    }
    let logContents = fs.readFileSync(jsonFilename, 'utf-8');

    // Odstráňte nové riadky a ohraničte obsah podľa formátu text/event-stream
    logContents = logContents.replace(/\n/g, ''); // Odstráňuje nové riadky

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    
    // Odoslanie dát klientovi
    res.write(`data: ${logContents}\n\n`);
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function getCurrentTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    return formattedTime;
}