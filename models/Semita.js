const mongoose = require('mongoose');
const {Schema} = mongoose;

const herbariosSchema = new Schema({
    nombre: {type: String},
    precio: {type: String},
    relleno: {type: Date}
});


module.exports = mongoose.model('semitas', semitasSchema);