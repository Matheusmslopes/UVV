import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from "./styles";
import Filme from './Filme';


export default function FilmePage() {
  
  let [filmes, setFilmes] = useState([]);

  
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      setFilmes(objeto.data);
    })
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>FILMES</Text>
      </View> 
  
      <View>
        { filmes.length > 0 ? filmes.map(filme => 
        <Filme key={filme.id} filme={filme.attributes}/>)
        : <ActivityIndicator size = {'large'}/>}
      </View>
        <StatusBar style = "auto"/>
    </View>
  );
}