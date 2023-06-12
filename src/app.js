let Reader = require("./Reader");
let Writer = require("./Writer");
let Processor = require("./Processor");
let Table = require("./Table");
let HTMLParser = require("./HTMLParser")

let reader = new Reader();
let escritor = new Writer();

async function main(){
    let dados = await reader.Read("../CSV/users.csv");

    let dadosProcessados = Processor.Process(dados);

    let usuarios = new Table(dadosProcessados);

    let html = await HTMLParser.Parse(usuarios);

    // escritor.Write("../HTML/" + Date.now() + ".html", html);

    dados = await reader.Read("../CSV/dataset.csv");
    dadosProcessados = Processor.Process(dados);
    let dataset = new Table(dadosProcessados);
    html = await HTMLParser.Parse(dataset);
    escritor.Write("../HTML/" + Date.now() + ".html", html);
}

main();