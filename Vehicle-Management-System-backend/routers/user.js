const router = require('express').Router();
const User = require('../models/user.model')
const ParkingLot = require('../models/parking.lot.model')
const ParkingSlot = require('../models/parking.slot.model')
const Vehicle = require('../models/vehicle.model')

router.get('/', (req, res) => {
    res.send("I am working");
})

// user registration route 
router.post('/auth/signup', async (req, res) => {
    try {
        const body = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            parentID: req.body.parentID
        }
        const user = new User(body);
        await user.save();
        res.status(201).json(user);

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

// USER LOGIN ROUTE 
router.post('/auth/login', async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findOne(body);

        if (user) {
            res.status(200).json(user)
        } else {
            res.send("User not Found!!")
        }

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

// ADD PARKING LOT ROUTE 
router.post('/add-parking-lot', async (req, res) => {
    const body = {
        parentID: req.body.parentID,
        name: req.body.name,
        numberOfSlots: req.body.numberOfSlots,
        lotType: req.body.lotType,
        updatedAt: new Date(),
        chargePerMin: req.body.chargePerMin,
        minimumCharge: req.body.minimumCharge,
    }
    try {
        const pl = new ParkingLot(body)
        await pl.save()
        console.log("Lot created");
        const slots = []
        for(let i=0; i<body.numberOfSlots; i++){
            slots[i] = new ParkingSlot({parentID: pl._id,updatedAt: new Date, vehicle: null})
        }

        const resp = await ParkingSlot.insertMany(slots)

        res.status(201).json(pl);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

// UPDATE PARKING LOT ROUTE
router.put('/edit-parking-lot', async (req, res) => {
    try {
        const plRes = await ParkingLot.findById(req.body.id)

        const response = await ParkingLot.findByIdAndUpdate(req.body.id, {
            $set: {
                name: req.body.name,
                numberOfSlots: req.body.numberOfSlots,
                lotType: req.body.lotType,
                updatedAt: new Date(),
                chargePerMin: req.body.chargePerMin,
                minimumCharge: req.body.minimumCharge,
            }
        })
        console.log("record Updated");

        if(req.body.numberOfSlots > plRes.numberOfSlots){
            console.log("adding slots");
            const slots = []
            for(let i=0; i<(req.body.numberOfSlots - plRes.numberOfSlots); i++){
                slots[i] = new ParkingSlot({parentID: req.body.id,updatedAt: new Date, vehicle: null})
            }
            await ParkingSlot.insertMany(slots)
            console.log("added slots");
        }

        if(req.body.numberOfSlots < plRes.numberOfSlots){
            console.log("removing slots");
            let slots = await ParkingSlot.find({parentID: req.body.id}).sort({updatedAt: -1}).limit(plRes.numberOfSlots-req.body.numberOfSlots)
            slots = slots.map(el => el._id)
            console.log(slots);
            await ParkingSlot.deleteMany({_id : {$in : slots}})
            console.log("slotes deleted :)");            
        }

        res.status(201).json(response);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

// GET PARKING LOT BY ID
router.get('/parking-lot/:id', async (req, res) => {
    try {
        const plRes = await ParkingLot.findById(req.params.id)
        console.log(plRes.numberOfSlots);
        res.status(201).json(plRes);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

// DELETE PARKING LOT BY ID
router.delete("/remove/:id", async (req, res) => {
    try {
        await ParkingLot.findByIdAndDelete(req.params.id)
        await ParkingSlot.deleteMany({parentID: req.params.id})

        res.status(201).json({message: "Successful"});        
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

// PARK VEHICLE
router.post('/park', async (req, res) => {
    try {
        const park = new Vehicle({
            numberPlate: req.body.numberPlate,
            parentID: req.body.parentID,
            exitAt: null,
            fees: null,
        })

        const response = await park.save()
        await ParkingSlot.findByIdAndUpdate(req.body.parentID, {
            $set: {
                vehicle: response._id,
                updatedAt: new Date()
            }
        })

        res.status(201).json(response);  
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

// CHARGE A BILL FOR VEHICLE
router.put('/parking-bill', async (req, res) => {
    try {
        const v1 = await Vehicle.findOne({numberPlate: req.body.numberPlate})
        const s1 = await ParkingSlot.findById(v1.parentID)
        const pl1 = await ParkingLot.findById(s1.parentID)

        let minimumCharge = pl1.minimumCharge
        let chargePerMin = pl1.chargePerMin

        let d1 = v1.entryTime
        let d2 = new Date()

        const fees = Math.round(((d2-d1)/1000)/60)*chargePerMin > minimumCharge ? Math.round(((d2-d1)/1000)/60)*chargePerMin : minimumCharge

        const response = await Vehicle.findByIdAndUpdate(v1.id, {
            $set: {
                exitAt : d2,
                fees : fees
            }
        })

        await ParkingSlot.findByIdAndUpdate(s1.id, {
            $set : {
                vehicle : null,
                updatedAt: d2
            }
        })

        res.status(200).json({
            numberPlate: v1.numberPlate,
            entryTime: v1.entryTime,
            exitTime: d2,
            Amount : fees
        })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

module.exports = router;