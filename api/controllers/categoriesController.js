import {db} from '../db.js'

export const getCategories = (req, res)=>{
    const q = "SELECT * FROM categories ORDER BY catName"

    db.query(q, (err,data)=>{
        if(err) return res.send(err)

        return res.status(200).json(data)
    })
}