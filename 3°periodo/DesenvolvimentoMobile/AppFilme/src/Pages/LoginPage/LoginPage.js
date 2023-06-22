import { Text, View, Image } from "react-native";
import { Link } from '@react-navigation/native';
import { useContext, useState } from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import AuthContext from "../../Contexts/AuthContext";
import { TouchableOpacity } from "react-native";


export default function LoginPage(){

    const { signIn } = useContext(AuthContext)
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <View style = {styles.container}>
            <Image style = {styles.img} source = {require('../../Assets/Img/logo.jpg')}/>
            <Text style = {styles.txt}>Melhores filmes</Text>
            <TextInput style = {styles.input}
                value = {usuario}
                onChangeText={text=>setUsuario(text)}
                placeholder="e-mail"/>
            <TextInput style = {styles.input}
                value = {senha}
                onChangeText={text=>setSenha(text)}
                placeholder="senha"
                secureTextEntry = 'true'/>
            <TouchableOpacity style = {styles.signin}   onPress={() => signIn()}>
                <Text style = {styles.btnText}> Entrar </Text>
            </TouchableOpacity>
            <View style = {styles.LoginBox}>
                <Link to= {{screen: "Página de registro"}} style = {styles.link}>Registre-se!</Link>
                <Link to= {{screen: "Página de recuperar senha"}} style = {styles.link}>Esqueceu a senha?</Link>
            </View>
           
        </View>
    )
}