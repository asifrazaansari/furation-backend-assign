import mongoose from "mongoose";

const csvParserSchema = new mongoose.Schema({

    countryName: {
        type: String,
    },
    countryCode: {
        type: String,
    }

}, { timestamps: true })


const csvParserModel = mongoose.model('Country', csvParserSchema)

export { csvParserModel }