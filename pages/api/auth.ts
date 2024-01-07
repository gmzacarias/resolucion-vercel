import type { NextApiRequest, NextApiResponse } from "next"
import { methods } from "micro-method-router"



// export default function authorization(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).send("soy la authorization");
// }


export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        res.send("soy el get")
    },
    async post(req: NextApiRequest, res: NextApiResponse) {
        res.send("soy el post")
    },
    async patch(req: NextApiRequest, res: NextApiResponse) {
        res.send("soy el patch")
    },
    async delete(req: NextApiRequest, res: NextApiResponse) {
        res.send("soy el delete")
    },

})