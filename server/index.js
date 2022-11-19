const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3500;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const logger = (req, res, next) => {
    console.log(`${req.method} on ${req.originalUrl}`);
    return next();
}

app.use(logger);


app.get('/', (req, res) => { 
    return res.send('server alive and running');
})


server.listen(port, ()=> {
    console.log(`Server is up on port ${port}.`)
});
