import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log("richiesta andata a buon fine")

    response.statusCode = 200
    response.setHeader("content-type", "application/json")
    const jsonResponse = JSON.stringify({location:"Mars"})
    response.end(jsonResponse)
})
server.listen(3000,()=>{
    console.log(`the server is running at http://localhost:3000`)
})