const mongoose = require("mongoose");

// const dns = require("dns");

// dns.setServers(["8.8.8.8", "8.8.4.4"]); 
const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log("Connection Error:", err.message);
        process.exit(1);
    }
};

module.exports = DB;