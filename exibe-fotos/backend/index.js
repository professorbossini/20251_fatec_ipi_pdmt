require('dotenv').config()
const axios = require("axios")
const cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json())
app.use(cors())

const pexelsClient = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: process.env.PEXELS_KEY
  }
})

//método do protocolo http, padrão de acesso, funcionalidade
//localhost:3000/search
app.get("/search", async (req, res) => {
  const query = req.query.query
  console.log(query)
  const result = await pexelsClient.get(
    "/search",{
      params: { query }
    }
  )
  console.log(result)
  res.json(result.data)
})

const port = 3000
app.listen(port, () => console.log(`Back end funcionando. Porta: ${port}.`))