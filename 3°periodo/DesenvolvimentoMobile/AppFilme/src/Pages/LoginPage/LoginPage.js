import { Text, View, Image } from "react-native";
import { Link } from '@react-navigation/native';
import { useState } from "react";
import { TextInput } from "react-native";
import styles from "./styles";


export default function LoginPage(){

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <View style = {styles.container}>
            <Image style = {styles.img} source = {{uri: 'https://i.pinimg.com/736x/fa/b0/f4/fab0f4c853e2305018eb07e5e3034341.jpg'}}/>
            <Text style = {styles.txt}>Alguma coisa Aqui?</Text>
            <TextInput style = {styles.input}
                value = {usuario}
                onChangeText={text=>setUsuario(text)}
                placeholder="e-mail"/>
            <TextInput style = {styles.input}
                value = {senha}
                onChangeText={text=>setSenha(text)}
                placeholder="senha"
                secureTextEntry = 'true'/>
            <View style = {styles.LoginBox}>
                <Link to= {{screen: "Página de filmes"}} style = {styles.link}>Entrar</Link>
                <Link to= {{screen: "Página de registro"}} style = {styles.link}>Registre-se!</Link>
            </View>
           
        </View>
    )
}
