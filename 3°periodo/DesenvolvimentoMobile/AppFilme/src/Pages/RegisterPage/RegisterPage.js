import { View, TouchableOpacity} from "react-native";
import { Link } from '@react-navigation/native';
import styles from "./styles";
import { useState } from "react"
import { TextInput } from "react-native"

export default function RegisterPage(){

    const [nome, setNome] = useState("")
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <View style = {styles.container}>
           <TextInput style = {styles.input}
                value = {nome}
                onChangeText={text=>setNome(text)}
                placeholder="Nome completo"/>
            <TextInput style = {styles.input}
                value = {usuario}
                onChangeText={text=>setUsuario(text)}
                placeholder="e-mail"/>
            <TextInput style = {styles.input}
                value = {senha}
                onChangeText={text=>setSenha(text)}
                placeholder="senha"
                secureTextEntry = 'true'/>

            <TouchableOpacity style = {styles.Btn}>
                <Link to= {{screen: "Página de filmes"}} style = {styles.txtBtn}>Confirmar</Link>
            </TouchableOpacity>
        </View>
    )
}
