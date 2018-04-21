const http = require("http")

const PORT = 7000

const PORTtwo = 7500

function handleRequest(request, response) {
    response.end("You did a great job, I'm proud of you!" + request.url);
}

function handleRequest2(request, response) {
    response.end("You suck!" + request.url);
}

const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

const logger = () => console.log("Server listening on: http://localhost:" + PORT)
const loggerTwo = () => console.log("Server listening on: http://localhost:" + PORTtwo)

server.listen(PORT, logger)

server2.listen(PORTtwo, loggerTwo)

