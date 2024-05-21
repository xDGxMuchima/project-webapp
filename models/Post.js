const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PostSchema = new Schema({
    act_name: {
        type: String,
        required: [true, 'Please provide Activity Name']
    },
    act_info: {
        type: String,
        required: [true, 'Please provide Activity Information']
    },
    act_addr: {
        type: String,
        required: [true, 'Please provide Activity Address']
    },
    act_date: {
        type: Date,
        required: [true, 'Please provide Activity Date']
    },
    act_time: {
        type: String,
        required: [true, 'Please provide Activity Time']
    },
    act_contact: {
        type: String,
        required: [true, 'Please provide Contract Detail']
    },
    act_company_name: {
        type: String,
        required: [true, 'Please provide Company Name']
    },
    act_moreinfo: {
        type: String,
        required: [false]
    },
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post