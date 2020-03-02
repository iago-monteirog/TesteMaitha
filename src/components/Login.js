import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/Styles';


export default class App extends Component {

  clicou = () => {
    console.log(this.props)
  }

  render() {

    return (
      //Logo
      <View style={styles.container}>
        <Image
          source={require('../assets/logo_react.png')}
          style={styles.logo}
        />
          {/* Login  */}
        <TextInput
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
        onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
        style={styles.button}
        onPress={ this.clicou.bind(this)}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity> */}

      </View>
    );
  } 
}

