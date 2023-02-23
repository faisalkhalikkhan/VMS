const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    numberPlate: String,
    entryTime: {
        type: Date,
        default: new Date()
    },
    parentID : String,
    exitAt: Date,
    fees: Number
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;