import dotenv from "dotenv";
import express from "express";
import route from "./routes/route.js"
import { Database } from "./utils/database.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

Database.connect()

app.use(express.json())

app.use('/', route)

app.all('*', (req, res) => {
    return res.status(400).send({ status: false, message: "Invalid url" })
})


app.listen(PORT, () => console.log(`Server is running on ${PORT} port`))
