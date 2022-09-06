//  Library
import express from 'express'

const router = express.Router()

router.get('/echo/:id', (req, res) => {
    const { id } = req.params
    res.json({
        message: id
    })
})

export default router
