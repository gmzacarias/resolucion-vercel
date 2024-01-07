import type { NextApiRequest, NextApiResponse } from "next"
import methods from 'micro-method-router'

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
       const query=req.query
       const queryString = JSON.stringify(query.q);
        res.send("soy la query= " + queryString)
    },
})