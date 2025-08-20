const mongoose=require('mongoose')
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false
    }
})
const TodoModal = mongoose.model("TodoModal", TodoSchema);

module.exports=TodoModal