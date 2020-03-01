import { StyleSheet } from 'react-native';

// Estilos

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
      
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100
    },
    input: {
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3
    },
    button: {
      width: 300,
      height: 42,
      backgroundColor: 'gray',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    },

    textItem: {
      fontSize: 20,
      color: '#000',
      padding: 25,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
    }
   
  });
  
  export default styles;