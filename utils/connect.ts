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
        mongoose.connect(dbUrl).then(() => {
            console.log("Mongo is running!");
        });
    } catch (error) {
        console.log(error);
    }
};