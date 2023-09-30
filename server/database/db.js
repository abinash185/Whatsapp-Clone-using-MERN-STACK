import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-m1t6ht5-shard-00-00.4l3c9gx.mongodb.net:27017,ac-m1t6ht5-shard-00-01.4l3c9gx.mongodb.net:27017,ac-m1t6ht5-shard-00-02.4l3c9gx.mongodb.net:27017/?ssl=true&replicaSet=atlas-vng6wl-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL , {useUnifiedTopology: true})
        console.log('Database Connected Successfully')

    }catch(error) {
        console.log('Error while conecting with the Database', error.message);

    }
}

export default Connection;