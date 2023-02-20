import mongoose from "mongoose";


class Database {
    static async connect() {
        const MONGO_URL = process.env.DATABASE_URL

        mongoose.connect(MONGO_URL)
            .then(() => console.log("MongoDB is connected"))
            .catch((error) => console.log(error))
    }
}

export {Database}