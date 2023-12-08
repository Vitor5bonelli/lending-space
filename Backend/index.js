const port =  process.env.PORT || 55155

const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())
app.use(express.json())

const User = require("./model/User")
const Item = require("./model/Item")
const Lending = require("./model/Lending")

const uri = "mongodb://127.0.0.1:27017/lendingdb"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    } catch(error) {
        console.error(error);
    }
}

connect()

app.listen(port, () => {
    
    console.log(`Server listening on port ${port}`)
})