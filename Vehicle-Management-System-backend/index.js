const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const port = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(express.json({ limit: "50mb", extended: true }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))
const CONNECTION_URL = "mongodb+srv://vms:vms123@cluster0.kc18p.mongodb.net/?retryWrites=true&w=majority"

const userRouter = require('./routers/user')
app.use("/user",userRouter)


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`server is on port ${port}`)))
    .catch((error) => console.log(error.message))