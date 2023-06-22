import { Image, Text, View, TouchableOpacity } from "react-native";
import { Link } from '@react-navigation/native';
import styles from "./styles";

const baseURL = "https://api.otaviolube.com";

export default function Filme({filme}){
    
    return (
        <View style = {styles.containerFilme}>
            <Image source = {{uri: baseURL + filme.poster.data.attributes.formats.small.url}} style = {styles.imagem}/>
            <Text style = {styles.tituloFilme}>{filme.titulo} <br/>{filme.subtitulo}</Text> 
            <Text style = {styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0, 200) + "..." : filme.sinopse }</Text>
            <TouchableOpacity style = {styles.Btn}>
                <Link to= {{screen: "Página de detalhes", params: {filme: filme}}} style = {styles.txtBtn}>Visualizar</Link>
            </TouchableOpacity>       
        </View>
    );
}




