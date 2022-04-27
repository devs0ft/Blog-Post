import mongoose from "mongoose";

// getting connection string
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("Please provide connection string in the .env.local file");
}

// accessing mongoose from the global variable
let cached = global.mongoose;

// checking if mongoose is not in the global variable then add mongoose connect to it
if(!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    // checking if connection is already established, then return it
    if (cached.conn) {
        return cached.conn;
    }
    
    if (!cached.promise) {
        const opt = {
            bufferCommands: false,
        };
        
        cached.promise = mongoose
        .connect(MONGO_URL, opt)
        .then((mongoose) => mongoose);
        
        cached.conn = await cached.promise;
        return cached.conn;
    }
    
}

export default dbConnect;
