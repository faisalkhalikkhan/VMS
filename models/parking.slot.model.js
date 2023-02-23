const mongoose = require('mongoose')

const parkingSlotSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    parentID : String,
    updatedAt: Date,
    vehicle: String
});

const ParkingSlot = mongoose.model('ParkingSlot', parkingSlotSchema);

module.exports = ParkingSlot;