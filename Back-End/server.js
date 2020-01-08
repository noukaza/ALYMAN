require('dotenv').config()
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, _ => {
    console.log(`
                |  | ||| | | |||| |   | | || ||    ##### 
                |  | ||| | | |||| |   | | || ||  _/_ ####
                |  | ||| | | |||| |   | | || || [.[.]-=## 
                |  | ||| | | |||| |   | | || ||  /_    )# 
                |  | ||| | | |||| |   | | || ||  |__/  #
                0  1  8  4 3   9  0   8 3  2  2   \___/
    BACK END APP ( LYMAN API )
    Server (http://localhost:${port}) started`)
});