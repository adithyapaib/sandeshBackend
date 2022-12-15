const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    id : {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    club : {
        type: String,
    },
    location : {
        type: String,
        required: true
    },
    noOfParticipants : {
        type: Number,
    },
    objective : {
        type: String,
    },
    organizer : {
        type: String,
        required: true
    },
    posterImg : {
        type: String,
    }
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
