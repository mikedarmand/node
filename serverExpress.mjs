import express from 'express'
import dotenv from 'dotenv'
const port = 3000

const server = express()
 
//  type Planet = {
//     id: number,
//     name: string,
//   };

//   type Planets = Planet[];

//   let planets: Planets = [
//     {
//       id: 1,
//       name: "Earth",
//     },
//     {
//       id: 2,
//       name: "Mars",
//     },
//   ];  

 
dotenv.config()
server.use(express.json())
const PORT = process.env.port


server.listen(port, () => {
    console.log(`the server is running at http://localhost:${PORT}`)
}) 