  export function somar(a,b){
    return a + b;
}

export   function dobro(n) {
    return n *2;
}


server.get('/dobro/:numero', (req, resp)  =>  {
    const numero = Number(req.params.numero);
    const dobro =  numero * 2;                
    resp.send({
    dobro : dobro
    })
})

server.get('/soma', (req, resp)  => {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
  
    const  x = somar(a, b);

        resp.send({
            soma : x
     })
})

server.post('/somar',(req, resp) => {
    try{
    const {  valores: { a,b}} = req.body;
    const x  = somar(a, b);



    resp.send({
        soma: x 
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }

})

export default server;

