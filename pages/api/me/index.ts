import type { NextApiRequest, NextApiResponse } from "next"
import methods from 'micro-method-router'

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        res.send("soy la data")
    },
    async patch(req: NextApiRequest, res: NextApiResponse) {
        res.send("datos actualizados")
    },
})