import express from 'express'
import dotenv from 'dotenv'
import { Planets } from './planets.mjs'
const port = 3000

const server = express()
 
dotenv.config()
server.use(express.json())
const PORT = process.env.port

server.get('/', (req, res) => {
    res.send("oh my god");
  })
//to get a single planet
  server.get('/Planets/:id', (req, res) => {
    const {id} = req.params
    const planet = Planets.find( pla => pla.id === Number(id))
    res.status(200).json(planet);
  })
//to get all planets
  server.get('/Planets', (req, res) => {
    res.status(200).json(Planets);
  })
  // to post

  server.post('/Planets', (req, res) =>{
    const {id,name} =req.body
    const newPlanet = {id,name}
    Planets = [...Planets, newPlanet]

    res.status(201).json({message:"planet has been created"})
  })

  // to put/update our app

  server.put('/Planets/:id', (req, res) =>{
    const {id} = req.params
    const {name} = req.body

    Planets = Planets.map( pla => pla.id === Number(id) ?({...pla, name}): pla)
    res.status(200).json({ message:"planets was updated"})
 // to delete
    server.delete('/users', (req, res)=>{
        const {id} = req.params
        users = users.filter(us => us.id !== Number(id))

        res.status(200).json({message: "user was deleted"})
    })
  })


server.listen(port, () => {
    console.log(`the server is running at http://localhost:${PORT}`)
}) 