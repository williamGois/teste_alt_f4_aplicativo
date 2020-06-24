import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './store/storeConfig';
import Addproduto from './src/components/Addproduto';
import Editproduto from './src/components/Editproduto';
import { createStackNavigator } from 'react-navigation-stack';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createAppContainer(

  createStackNavigator({
    Addproduto: {
      screen: Addproduto,
      navigationOptions: {
        header: null
      }
    },
    Editproduto: {
      screen: Editproduto,
      navigationOptions: {
        header: null
      }
    },
  })
);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}