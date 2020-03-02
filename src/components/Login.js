import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/Styles';
export default class App extends Component {

  clicou = () => {
    alert('OLA!');
  }

  render() {

    // const { navigate } = this.props.navigation;

    return (
      //Logo
      <View style={styles.container}>
        <Image
          source={require('../assets/logo_react.png')}
          style={styles.logo}
        />
          {/* Login  */}
        <TextInput
          autoCorrect={false}
          style={styles.input}
          placeholder="Digite seu login:"
        />
        {/* Senha */}
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha:"
        />

        {/* Botao */}
        <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigate.navigation.bind('Home')}  // this.clicou.bind(this) () => {this.props.navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        

        </View> 
    );
      
}
}

