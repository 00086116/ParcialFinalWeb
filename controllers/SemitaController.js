const semita = require('../models/Semita');
const semitaController = {};

semitaController.index = async function (req, res, next) {
    try {
        let semitas = await semita.find();
        return res.status(200).json(semitas);
    } catch (error) {
        return res.status(500).json({ error: error });
    }

};


semitaController.insert = async function (req, res, next) {
    let h = new semita();
    h.nombre = req.body.nombre;
    h.precio = req.body.precio;
    h.relleno = req.body.relleno;

    try {
        await h.save();
        return res.status(200).json({ h });
    } catch (error) {
        return res.status(500).json({ error: error });
    }

};

semitaController.delete = async function (req, res){
    let {id} = req.params;
    try {
        await semita.remove({_id:id});
        return res.status(200).json({ h });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}



module.exports = semitaController;