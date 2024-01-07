export default function probando(req,res){
    res.status(200).json({
        body:req.body,
    query:req.query,
    cookies:req.cookies,
    test:true
    })
}