import csv from "csvtojson"
import { csvParserModel } from "../models/csvParser.js";

class CsvParserService {
    async parsCsv() {
        const jsonArray = await csv().fromFile("Data-Table.csv")
        const parsedData = jsonArray.map((data) => {
            return {
                countryName: data["Country Name"],
                countryCode: data["Country Code"],
            }
        })
        const result = await csvParserModel.insertMany(parsedData)
        return result
    }

    async getSortedData(fieldName, sortOrder) {
        const sort = {}
        sort[fieldName] = sortOrder === "ascending" ? 1 : -1

        const result = await csvParserModel.find().sort(sort).limit(50)
        return result
    }
}

export { CsvParserService }
