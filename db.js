const clientes = [
    { 
        id: 25,
        nome:"Fabiane",
        idade:18
    },
    {
        id: 26,
        nome:"Danilo",
        idade:55
    }
];

function listaClientes(){
        return clientes;
}

function listaCliente(id){
    return clientes.find(c => c.id == id);
}
function insereCliente(cliente){
    clientes.push(cliente);
}

function alteraCliente(id,dadoscliente){
    const clientenovo =  clientes.find(c => c.id == id);
   if (clientenovo){
    clientenovo.nome =  dadoscliente.nome;
    clientenovo.idade = dadoscliente.idade;
   } else {
        return("Erro");
   }    
}

function removeCliente(id){
    const indice = clientes.findIndex(c => c.id == id);
    clientes.splice(indice,1);
}

module.exports = {
    listaClientes,
    listaCliente,
    insereCliente,
    alteraCliente,
    removeCliente
}

