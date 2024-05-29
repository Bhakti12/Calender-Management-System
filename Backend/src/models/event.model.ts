import mongoose from "mongoose";

var eventModel = new mongoose.Schema({
    eventTitle : {
        type: String
    },
    description : {
        type: String
    },
    listOfParticipants : {
        type: Array
    },
    Date : {
        type: Date
    },
    Time : {
        type: String
    },
    durationInHrs : {
        type : String
    },
    sessionNotes : {
        type : String
    }
},{
    timestamps : true
});

module.exports = mongoose.model(
    'Event',
    eventModel,
    'Event'
);