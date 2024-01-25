import mongoose from "mongoose";
import 'dotenv/config';

declare var process: {
    env: {
        DBLINK: string
    }
};

const dbUrl = process.env.DBLINK  

export const connect = () => {
    try {
        mongoose.connect('mongodb+srv://thuranyi64:aO8fxOmfXm6Evdwn@cluster0.xuw2ndg.mongodb.net/?retryWrites=true&w=majority').then(() => {
            console.log("Mongo is running!");
        });
    } catch (error) {
        console.log(error);
    }
};