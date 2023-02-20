import express from "express";
import { csvToJson, sortedData } from "../controllers/csvParser.js";

const router = express.Router()


router.post('/csv', csvToJson)
router.get('/sortedData', sortedData)


export default router