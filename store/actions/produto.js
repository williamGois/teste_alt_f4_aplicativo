import {
    NOME,
    QUANTIDADE,
    CARREGA_PRODUTOS,
    VALOR,
    IDPRODUTO,
    CARREGA_PRODUTO_EDIT
} from './actionTypes'

// Action Carrega produtos
export function carregaProduto() {
    
    return (dispatch) => {
        //Carregamento de dados via api
        return fetch(`https://desafio-apirest-produtos.herokuapp.com/api/produtos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()).then((responseJson) => {
            dispatch({
                type: CARREGA_PRODUTOS,
                payload: responseJson
            })
        })
    }
}

// Action Creator
export function carregaEdit(value) {
    return {
        type: IDPRODUTO,
        payload: value
    }
}

// Action Creator
export function carregaProdutoEdit(value) {
    return (dispatch) => {
        //Carregamento de dados via api
        fetch(`https://desafio-apirest-produtos.herokuapp.com/api/produto/${value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseJson) => {

            dispatch({
                type: CARREGA_PRODUTO_EDIT,
                payload: responseJson
            })
        })
       
    }
}

// Action ATUALIZAR PRODUTO
export function updateProduto(id, nome, quantidade, valor) {
    var v = parseFloat(valor.toFixed(2));
    var data = {
        "id": id,
        "nome": nome,
        "quantidade": quantidade,
        "valor": v
    }
    return (dispatch) => {
        dispatch({
            type: "editado",
            payload: true
        })
        //Carregamento de dados via api
        fetch('https://desafio-apirest-produtos.herokuapp.com/api/produto', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data),
        }).then((responseJson) => {
            console.log(responseJson)
        })
        alert("Atualizado com Sucesso!")
    }
}

// Action Creator ADICIONAR PRODUTO
export function adicionarProduto(id, nome, quantidade, valor) {
    var data = {
        "id": id,
        "nome": nome,
        "quantidade": quantidade,
        "valor": valor
    }
    return (dispatch) => {
        dispatch({
            type: "adicionado",
            payload: true
        })

        //POST PARA carreagar produto de dados via api
        fetch('https://desafio-apirest-produtos.herokuapp.com/api/produto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain'
            }, body: JSON.stringify(data),
        }).then((responseJson) => {
            console.log(responseJson)
        })
        alert("Cadastrado com Sucesso!")
    }
}



// Action LIMPA DADOS
export function remove() {
    var data = {
        "id": "",
        "nome": "",
        "quantidade": "",
        "valor": ""
    }
    return {
        type: CARREGA_PRODUTO_EDIT,
        payload: data
    }
}

// Action Creator
export function nomeDigitado(value) {
    return {
        type: NOME,
        payload: value
    }
}

// Action Creator
export function quantidadeDigitada(value) {
    return {
        type: QUANTIDADE,
        payload: value
    }
}

// Action Creator
export function editadoFunc(value) {
    return {
        type: "editado",
        payload: value
    }
}

// Action Creator
export function adicionadoFunc(value) {
    return {
        type: "adcionado",
        payload: value
    }
}

// Action Creator
export function valorDigitado(value) {
    return {
        type: VALOR,
        payload: value
    }
}