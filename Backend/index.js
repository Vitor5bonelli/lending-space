const port =  process.env.PORT || 55155

const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const connect = require("./db")
const app = express()

app.use(cors())
app.use(express.json())

const User = require("./model/User")
const Item = require("./model/Item")
const Lending = require("./model/Lending")

connect()

app.listen(port, () => {
    
    console.log(`Server listening on port ${port}`)
})