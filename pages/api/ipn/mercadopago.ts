import type { NextApiRequest, NextApiResponse } from "next"
import methods from 'micro-method-router'

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        res.send("soy la señal de mercado pago ")
    },
})