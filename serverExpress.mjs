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
const getOneById = (req, res) => {
    const {id} = req.params
    const planet = Planets.find( pla => pla.id === Number(id))
    res.status(200).json(planet);
  }
//to get all planets
const getAll= (req, res) => {
    res.status(200).json(Planets);
  }
  // to post

  const create= (req, res) =>{
    const {id,name} =req.body
    const newPlanet = {id,name}
    Planets = [...Planets, newPlanet]

    res.status(201).json({message:"planet has been created"})
  }

  // to put/update our app

  const updateById= (req, res)=>{
    const {id} = req.params
    const {name} = req.body

    Planets = Planets.map( pla => pla.id === Number(id) ?({...pla, name}): pla)
    res.status(200).json({ message:"planets was updated"})
  }
 // to delete
 const deleteById = (req, res) =>{
        const {id} = req.params
         Planets = Planets.filter(pla => pla.id !== Number(id))

        res.status(200).json({message: "planet was deleted"})
    }
  


server.listen(port, () => {
    console.log(`the server is running at http://localhost:${PORT}`)
}) 