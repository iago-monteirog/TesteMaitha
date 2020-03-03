import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles/Styles';

export default class Home extends Component {

    //armazena o estado da aplicação
    constructor(props) {
        super(props);
        this.state = {
          data: [] //armazena os dados vindo da API
        }
      }
    
      carregaPaises = () => {
        fetch('https://xplora-api.herokuapp.com/api/statecity',
        {
          method: 'GET',
          headers: {
            'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZkdWR1ZkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2QVVycnk2SmhzSHlNeXFrRGY2blp1RUpVejBOaG5xRlhxWTZieDVyVFVxWk5tdFFTWVc3RyIsImlhdCI6MTU3ODk0MDY2MywiZXhwIjoxNTc4OTQ0MjYzfQ.WMeGkIWfSEZYRQ0vSiU7Z3jYQyqkGmeUiPRLkD6JWDo'
          },
          body: this.data
        })
        .then((response) => response.json()) // transforma em JSON
        .then((responseJson) => {
                alert(responseJson.detail)
        }).catch((error) => {
            alert('error')})}
    
    
    componentDidMount() { 
        this.carregaPaises();
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.data} // tras a variavel de estado
                    renderItem={({item}) => ( // renderiza cada item da lista
                        <View>
                            <Text>{item.pais}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
