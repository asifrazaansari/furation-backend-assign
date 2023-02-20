import { CsvParserService } from "../services/csvParser.js";

const csvParserService = new CsvParserService()

const csvToJson = async (req, res) => {
  try {

    const result = await csvParserService.parsCsv()

    return res.status(201).send({ status: true, message: `${result.length} data successfully inserted` })

  } catch (error) {
    return res.status(500).send({ status: false, message: error })
  }
}

const sortedData = async (req, res) => {
  try {

    const { fieldName, sortOrder } = req.query

    const result = await csvParserService.getSortedData(fieldName, sortOrder)

    return res.status(200).send({ status: true, message: `first ${result.length} records`, data: result })

  } catch (error) {
    return res.status(500).send({ status: false, message: error })

  }
}

export { csvToJson, sortedData }