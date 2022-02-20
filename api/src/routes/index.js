const { Router } = require('express');
const router = Router();
const {Sequences} = require('../db');
const { getSequenceNumber } = require('../logic/secuencia')
const {Op} = require ("sequelize")

//Cuenta y recupera de la base de datos
router.get("/stats", async(req, res, next)=>{
    try {
        const getcountsequence = await Sequences.count({
            where:{
                countsequence:{
                    [Op.gte]:1
                }
            }
        })
        const getcountnosequence = await Sequences.count({
            where:{
                countnosequence:{
                    [Op.eq]:0
                }
            }
        })
        res.status(200).send({count_sequence_string: getcountsequence, count_no_sequence_string: getcountnosequence})
    } catch (e) {
        next(e)
    }
    
})

//Guarda una secuencia en la base de datos
router.post("/sequence", async (req, res, next)=>{
    try { 
        const {chain} = req.body;

        let countsequence = getSequenceNumber(chain)
        let countnosequence

        if(countsequence >= 1){
            const newSequence = await Sequences.create({
                chain,
                countsequence,
                countnosequence
            })
            res.status(200).send(newSequence)
        } else{
            countnosequence = 0
            const newSequence = await Sequences.create({
                chain,
                countsequence,
                countnosequence
            })
            res.status(403).send(newSequence)
        }
    } catch(e) {
        next(e)
    }
})

module.exports = router;
