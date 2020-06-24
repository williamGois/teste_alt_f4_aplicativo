import React, { Component } from "react";
import { connect } from "react-redux";
import { nomeDigitado, quantidadeDigitada, valorDigitado, adicionadoFunc, adicionarProduto } from "../../store/actions/produto";
import { withNavigationFocus } from 'react-navigation';
import { TextInput, StyleSheet, View, Text, ScrollView,TouchableOpacity } from 'react-native';
import Produto from './Produto';

class Addproduto extends Component {
  //Funçao para adicionar produto
  adicionar() {
    //Action para adicionar produto Via Redux
    this.props.adicionarProduto(this.props.id, this.props.nome, this.props.quantidade, this.props.valor)
  }
  render() {
    const { nome, quantidade, valor } = this.props;
    return (
      <ScrollView style={styles.App}>
        <Text style={styles.H1}>Produtos Alt-F4</Text>
        <View style={styles.Card}>
          <View style={styles.Content}>
            <View style={styles.Addproduto}>
              <View style={styles.bdy}>
                <View style={{}}><Text style={styles.Titles}>Nome:</Text></View>
                <TextInput style={styles.Input} value={nome}
                  onChangeText={text => this.props.nomeDigitado(text)} />
              </View>
              <View style={styles.bdy}>
                <View style={{}}><Text style={styles.Titles}>Quantidade:</Text></View>
                <TextInput style={styles.Input} type="number" value={quantidade}
                  onChangeText={text => this.props.quantidadeDigitada(text)} />
              </View>
              <View style={styles.bdy}>
                <View style={{}}><Text style={styles.Titles}>Valor:</Text></View>
                <TextInput style={styles.Input} type="number" value={valor}
                  onChangeText={text => this.props.valorDigitado(text)} />
              </View>
            </View>
          </View>
          <View style={styles.HeaderAddproduto}>
            <TouchableOpacity style={styles.btn} onPress={() => this.adicionar()}><Text style={styles.Titles}>Adicionar Produto</Text></TouchableOpacity>
          </View>
        </View>
        <Produto></Produto>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  App: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    color: "#FFF",
    backgroundColor: "#222",
   

  },
  H1: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
    fontSize: 30
  },
  linha: {
    display: "flex"
  },
  Titles: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  Card: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  Header: {
    color: "#FFF",
    backgroundColor: "#1565c0"
  },
  Content: {
    backgroundColor: "#2196f3",
    padding: 20
  },
  Input: {
    backgroundColor: "#FFF",
    marginTop: 5,
    borderRadius: 6
  },
  HeaderAddproduto: {
    backgroundColor: "#1565c0",
    width: "100%",
    padding: 20
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bdy: {
    marginBottom: 10
  }
})

const mapStateToProps = (state) => {
  return {
    nome: state.produto.nome,
    quantidade: state.produto.quantidade,
    valor: state.produto.valor,
    adicionado: state.produto.adicionado,
  };
};

const con = connect(
  mapStateToProps,
  {
    nomeDigitado,
    quantidadeDigitada,
    valorDigitado,
    adicionadoFunc,
    adicionarProduto
  }
)(Addproduto);

export default withNavigationFocus(con);