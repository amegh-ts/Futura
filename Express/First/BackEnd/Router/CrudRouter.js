const router=require('express').Router()
const users=require('../Models/UserSchema')

router.delete('/delete/:id',async(req,res)=>{
    try {
        await users.findByIdAndDelete(req.params.id)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
