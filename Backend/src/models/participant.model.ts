import mongoose from "mongoose";

var participantModel = new mongoose.Schema({
    event_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps : true
});

module.exports = mongoose.model(
    'Participant',
    participantModel,
    'Participant'
);