const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const dataSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    {
        timestamps:{
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    }
);

module.exports = model("Data", dataSchema);
