import mongoose from 'mongoose'


const cardSchema = mongoose.Schema({
    name:String,
    url:String,
    age:Number
}) 


export default mongoose.model('Cards',cardSchema);