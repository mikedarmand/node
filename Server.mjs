import {createServer} from "node:http"

const server = createServer((request,response) =>{
    console.log("la domanda é andata a buon fine")

    response.statusCode = 200
    response.setHeader("content-type","text/html")
    response.end("<html><body><h1>woohhhhhhh that's great i did it!</h1></body></html>")
})
server.listen(3000, () => {
    console.log(`the server is running at http://localhost:3000`)
})