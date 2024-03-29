const mongoose = require("mongoose")
const scoreSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId, ref:"schoolApp", require:true
    },
    math: {
        type: Number,
        default:0
    },
      english: {
        type: Number,
        default:0
    }
})

const scoreModel= mongoose.model('score', scoreSchema)
module.exports=scoreModel