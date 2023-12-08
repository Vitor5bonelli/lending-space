const port = 55155 || process.env.port
const express = require("express")
const app = express()

const database = require("db")
await database.sync()

const User = require("./model/User")


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})