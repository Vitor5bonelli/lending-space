const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/lendingdb";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    } catch(error) {
        console.error(error);
    }
}

module.exports = connect;
