import type { NextApiRequest, NextApiResponse } from "next"
import methods from 'micro-method-router'

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
       const productId=req.query.productId
        res.send("soy el productId= " + productId)
    },
})