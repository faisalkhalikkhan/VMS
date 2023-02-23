const mongoose = require('mongoose')

const parkingLotSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    parentID : String,
    name: String,
    numberOfSlots: Number,
    lotType: String,
    updatedAt: Date,
    chargePerMin: Number,
    minimumCharge: Number,
});

const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;