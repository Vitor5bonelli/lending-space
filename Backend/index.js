const port =  process.env.PORT || 55155

const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const connect = require("./db")

const lendingController = require('./controller/lendingController');

const userRoutes = require("./route/userRoutes")
const app = express()

app.use(cors())
app.use(express.json())
app.use("/user", userRoutes)

connect()

app.get('/', lendingController.getLendings);

app.listen(port, () => {
    
    console.log(`Server listening on port ${port}`)
})