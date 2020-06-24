import React, { Component } from "react";
import { connect } from "react-redux";
import { nomeDigitado, quantidadeDigitada, valorDigitado, adicionadoFunc, updateProduto, remove, carregaProdutoEdit, adicionarProduto } from "../../store/actions/produto";
import { withNavigationFocus } from 'react-navigation';
import { TextInput, StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Produto from './Produto';
import back from '../images/back.png';

class Editproduto extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.props.carregaProdutoEdit(this.props.id);

  }

  //Funçao para adicionar produto
  update() {
    this.props.updateProduto(this.props.id, this.props.nome, this.props.quantidade, this.props.valor)
  }
  render() {

    return (
      <ScrollView style={styles.App}>
        <Text style={styles.H1}>Produtos Alt-F4</Text>
        <TouchableOpacity className="bck" to="/" onPress={() => {
          this.props.remove();
          this.props.navigation.navigate('Addproduto');
        }}>
          <View style={styles.goBack}>
            <Image style={styles.srt} source={require('../images/back.png')} alt="Logo" />
            <Text style={styles.back}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.Card}>
          <View style={styles.Content}>
            <View style={styles.Addproduto}>
              <View style={styles.bdy}>
                <View style={{}}><Text style={styles.Titles}>Nome:</Text></View>
                <TextInput style={styles.Input} value={this.props.nome}
                  onChangeText={text => this.props.nomeDigitado(text)} />
              </View>
              <View style={styles.bdy}>
                <View style={{}}><Text style={styles.Titles}>Quantidade:</Text></View>
                <TextInput style={styles.Input} type="number" value={""+this.props.quantidade}
                  onChangeText={text => this.props.quantidadeDigitada(text)} />
              </View>
              <View style={styles.bdy}>
                <View style={{}}><Text style={styles.Titles}>Valor:</Text></View>
                <TextInput style={styles.Input} value={""+this.props.valor}
                  onChangeText={text => this.props.valorDigitado(text)} />
              </View>
            </View>
          </View>
          <View style={styles.HeaderAddproduto}>
            <TouchableOpacity style={styles.btn} onPress={() => this.update()}><Text style={styles.Titles}>Editar Produto</Text></TouchableOpacity>
          </View>
        </View>
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
    marginTop: 20,
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
  },
  srt: {
    width: 28,
    height: 28,
    marginRight: 9
  },
  back: {
    color: "#FFFFFF"
  },
  goBack: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20
  }
})

const mapStateToProps = (state) => {
  return {
    id: state.produto.id,
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
    adicionarProduto,
    updateProduto,
    remove,
    carregaProdutoEdit
  }
)(Editproduto);

export default withNavigationFocus(con);