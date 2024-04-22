//abrir uma pasta que contem html e executar através de
//estrutura de decisão alguma página selecionada

//sistema de rotas simples
const http = require('http');
const fs =require('fs');

let porta=3000;
let host="localhost";

const server = http.createServer((req,res)=>{
    //header
    res.setHeader('content-type','text/html');
    //criando as rotas
    let html_page='';

    switch(req.url){
    case '/home': //sem digitar home ou digitando, ele leva para a pagina home
        html_page='home.html';
        res.statusCode=200;
        break;
    case '/servicos':
        html_page='servicos.html';
        res.statusCode=200;
        break;
    case '/sobre':
            html_page='sobre.html';
            res.statusCode=200;
            break;
    default: //caso nao seja encontrado nenhuma, redireciona para essa
        html_page='404.html';
        res.statusCode = 404;
        break;
    }

//preparando a abertura das páginas em html
fs.readFile('./html/'+html_page,(erro,data)=>{
    if(erro){
        console.log(erro);
        res.end();
    }else{
        res.write(data);
        res.end()
    }
})

})

server.listen(porta,host,()=>{
    console.log("Servidor em execução!")
})

//hora de criar a infra de html
//criar sistema de rotas

