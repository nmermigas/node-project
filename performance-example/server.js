const express = require('express');


//The workers run the same code as the server.js

const app = express();

function delay(duration){
    const startTime = Date.now();

    while (Date.now() - startTime < duration) {
        //event loop is blocked
    }
}

app.get('/', (req, res) => {
    // JSON.stringify({}) => '{}'
    // JSON.parse("{}") => {}
    res.send(`Performance example ${process.pid}`);
})

app.get('/timer', (req,res) =>{
    delay(9000);
    res.send(`Ding ding ding ${process.pid}`);
})

console.log('Running Server.js...');
//only as the master process is started
console.log("Worker process has been started");
app.listen(3001);

