const express= require("express")

require('./config')
const app = express()

const port = 3000


app.use(express.json())


app.listen(port, () => {
    console.log(`server is listening on port :${port}`)
})