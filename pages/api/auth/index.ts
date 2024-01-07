import type { NextApiRequest, NextApiResponse } from "next"
import methods from 'micro-method-router'

//funcionamiento interno de methods
// function methods(handlers){
//     return function(req:NextApiRequest,res:NextApiResponse){
//         const handlerFinal=handlers[req.method.toLowerCase()]
//         if(handlerFinal){
//             handlerFinal(req,res)
//         }else{
//             res.status(405).send("Method not allowed by Gaston")
//         }
//     }
// }

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        res.send("soy el post")
    },
})