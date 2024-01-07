import type { NextApiRequest, NextApiResponse } from "next"
import methods from 'micro-method-router'

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
       const {productId}=req.query
        res.send("soy el productId= " + productId)
    },
})