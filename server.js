const PORT = 8005
const axios = require("axios")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())

app.get("/flights", (req, res) => {
  const options = {
    url: `${process.env.URL}?page-size=6`,
    headers: {
      accept: "application/json",
      "X-Cassandra-Token": process.env.TOKEN,
    },
  }

  axios
    .request(options)
    .then((response) => {
      console.log(response.data)
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.listen(PORT, () => console.log(`The Server is running on port ${PORT}`))
