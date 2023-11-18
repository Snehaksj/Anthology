import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config()
// const username = process.env.
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-3pvjxrg-shard-00-00.efyurs4.mongodb.net:27017,ac-3pvjxrg-shard-00-01.efyurs4.mongodb.net:27017,ac-3pvjxrg-shard-00-02.efyurs4.mongodb.net:27017/?ssl=true&replicaSet=atlas-vdt07x-shard-0&authSource=admin&retryWrites=true&w=majority`;
        try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;