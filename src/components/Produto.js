import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { nomeDigitado, quantidadeDigitada, valorDigitado, adicionadoFunc, adicionarProduto, carregaProduto,carregaEdit } from "../../store/actions/produto";
import { withNavigationFocus } from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";

class Produto extends Component {
  constructor(props) {
    super(props);
    this.getProdutos = this.getProdutos.bind(this);

  }

  componentDidMount() {
    this.props.carregaProduto();
  }

  formatValue(value) {
    let v = parseFloat(value);
    return v.toFixed(2);
  }

  getProdutos(data) {
    return (
      <TouchableOpacity style={styles.ProdutosList} key={data.id} onPress={()=>{
        this.props.carregaEdit(data.id);
        this.props.navigation.navigate('Editproduto');
      }}>
        <View style={styles.Header}>
          <Text style={styles.Title}>{data.nome}</Text>
        </View>
        <View style={styles.ContentProduto}>
          <View style={styles.Body}>
            <Text style={styles.Title}>Quantidade: {data.quantidade}</Text>
          </View>
        </View>
        <View style={styles.ContentProduto}>
          <View style={styles.Body}>
            <Text style={styles.Title}>R${this.formatValue(data.valor)} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.Produto}>
        {this.props.produtosAll.length != 0 &&
          < FlatList
            data={this.props.produtosAll}
            renderItem={({ item }) => this.getProdutos(item)}
          />
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  Produto: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 50,
    paddingBottom:100
  },
  ProdutosList: {
    width: "100%",
    paddingBottom: 20,


  },
  Header: {
    flex: 1,
    color: "#FFF",
    backgroundColor: "#1565c0",
    display: "flex",
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  Title: {
    flex: 1,
    padding: 5,
    color: "#FFF",
    fontWeight: "bold",
    fontSize:25
  },
  Body:{
    flex: 1,
    color: "#FFF",
    backgroundColor: "#2196f3",
    display: "flex",
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center"
  }
})

const mapStateToProps = (state) => {
  return {
    nome: state.produto.nome,
    quantidade: state.produto.quantidade,
    valor: state.produto.valor,
    adicionado: state.produto.adicionado,
    produtosAll: state.produto.produtosAll,
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
    carregaProduto,
    carregaEdit
  }
)(Produto);

export default withNavigationFocus(con);
