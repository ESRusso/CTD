/* Primeira função */

function senhaValida(senha) {
    if (senha === 1234) {
        console.log("ACESSO PERMITIDO");
    } else {
        console.log("ACESSO NEGADO");
    }
}
    senhaValida(1235)

/* Segunda função */

function valores(a,b) {
    if (a > b) {
        console.log("O primeiro número é maior");
    }
    else if (a < b){
        console.log("O segundo número é maior");
    }
    else{
        console.log("Os dois números são iguais");
    }
}
valores(5,4);


/* Terceira função */

let mes = 3;

switch(mes) {
    
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Não tem")
        break;
}

/* Quarta função */

let senha = 1234 ? "AcessoPermitido" : "AcessoNegado"
console.log(senha)


/* Projeto Microondas*/

const menu = {

    comidas: ['pipoca', 'macarrão', 'carne', 'feijão', 'brigadeiro'],
    TempoPadrao: [10, 8, 15, 12, 8],

}


const pedido = (comida, tempo) => {

    let PedidoFeitoComSucesso;

    for (let i = 0; i < menu.comidas.length; i++) {

        if (comida === menu.comidas[i]) {

            if (tempo > menu.TempoPadrao[i] * 3) {

                console.log('KABOOOM');

            } else if (tempo > menu.TempoPadrao[i] * 2) {
             
                console.log('Queimou');
                
            } else if (tempo < menu.TempoPadrao[i]) {
             
                console.log('Tempo Insuficiente');
                
            } else {

                PedidoFeitoComSucesso = true;
                console.log('Feito');

            }

            break;

        }

    }

    switch (PedidoFeitoComSucesso) {

        case true:

            console.log('Bom apetite!');
            break;

        default:

            console.log('Prato Inexistente');
    }

} 

pedido('macarrão', 9)