const express= require("express")
const contactroutes= require("./contactRouter/contactroutes")
const cors = require("cors")
require('./config')
const app = express()

const port = 5000
app.use(cors({origin:'*'}));

// app.use(cors({origin:'*'}))
app.use(express.json())
app.use("/api/v1/contacts",contactroutes)

app.listen(port, () => {
    console.log(`server is listening on port :${port}`)
})