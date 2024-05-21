const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ReviewSchema = new Schema({
    rev_chat: {
        type: String,
        required: [true, 'Please provide Post']
    },
    rev_date: {
        type: String,
        required: [true, 'Please provide Post Date']
    },
    rev_time: {
        type: String,
        required: [true, 'Please provide Post Time']
    }
})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review