import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema({
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    bookStart: {type: String},
    bookEnd: {type: String},


})


export default mongoose.model("Booking", BookingSchema)