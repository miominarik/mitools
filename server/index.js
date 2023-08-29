const express = require('express');
const fs = require('fs');
const {v5: uuidv5} = require('uuid');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://mitools.eu' })); // Povoluje CORS pro daný origin

// Definujeme názov (namespace) - konštantu alebo vlastný reťazec
const MY_NAMESPACE = '486304d6-46a2-11ee-9760-325096b39f47';

const requestLog = {};

app.post('/create', cors(), (req, res) => {
    if (req.body.uuid) {
        const uniqueId = uuidv5(req.body.uuid, MY_NAMESPACE);
        requestLog[uniqueId] = [];
        const jsonFilename = `keys/${uniqueId}.json`;
        fs.writeFileSync(jsonFilename, JSON.stringify(requestLog[uniqueId], null, 2));
        res.json({url: `${uniqueId}`});
    }
});

app.use('/catch/:id', cors(), (req, res) => {
    const requestId = req.params.id;
    const jsonFilename = `keys/${requestId}.json`;
    if (!requestLog[requestId]) {
        requestLog[requestId] = [];
        fs.writeFileSync(jsonFilename, JSON.stringify(requestLog[requestId], null, 2));
    }

    requestLog[requestId].push({
        method: req.method,
        url: req.url,
        data: req.body,
        headers: req.headers,
        time: getCurrentTime(),
    });
    fs.writeFileSync(jsonFilename, JSON.stringify(requestLog[requestId], null, 2));

    res.status(202).json({
        status: 'success'
    });
});

app.post('/log/:id', cors(), (req, res) => {
    const requestId = req.params.id;
    const jsonFilename = `keys/${requestId}.json`;
    if (!requestLog[requestId]) {
        return res.status(404).json({status: 'failed'});
    }
    const logContents = fs.readFileSync(jsonFilename, 'utf-8');
    res.json({
        status: 'success',
        data: logContents
    });
});

const PORT = 3000;
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