import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0D0D0D",
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },

    containerTitulo: {
      backgroundColor: "#088C7F",
      marginBottom: 10,
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      borderRadius: 20
    },

    titulo: {
      color: '#F2CB05',
      fontSize: 50,
      fontWeight: 'bold'
    },

    containerFilme: {
      backgroundColor: '#088C7F',
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
      width: '100%'
    },

    viewImg: {
      width: '100%'
    },

    imagem: {
      width: '100%',
      height: 500,
      borderRadius: 20,
      padding: 100,
      resizeMode: 'cover',
      marginBottom: 10
    },
     
    viewDados: {
      padding: 10,
      justifyContent: 'space-evenly'
    },
    
    tituloFilme: {
      color: '#000',
      backgroundColor: "#8C6A04",
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      boxShadow: "0px 4px 19px -2px rgba(0,0,0,0.75)",
      justifyContent: 'space-evenly',
      borderRadius: 20
    },
  
    sinopse: {
      color: '#0D0D0D',
      margin: 10,
      fontSize: 14,
      fontWeight: 'bold'
    },
     
    carregando: {
      color: '#F2B807',
      fontSize: 20,
      fontStyle:'bold'
    },

    Btn: {
        backgroundColor: "#0D0D0D",
        height: '40px',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },

    txtBtn: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
  });

export default styles;
