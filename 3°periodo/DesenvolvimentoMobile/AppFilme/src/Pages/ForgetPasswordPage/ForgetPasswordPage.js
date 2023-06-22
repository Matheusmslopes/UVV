import { Text, View, TextInput } from "react-native";;
import { Link } from "@react-navigation/native";
import { useState } from "react";
import styles from "./styles";

export default function ForgetPasswordPage() {

    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Esqueceu a senha?</Text>
            <View style = {styles.LoginView}>
                <Text style={styles.txt}>Só precisamos do seu email cadastrado</Text>
                <TextInput style={styles.input}
                    value={email}
                    placeholder="email"
                    onChangeText={text=>setEmail(text)}
                />
            </View>
            <Link
                style = {styles.signin}
                to = {{ screen: 'Página de login' }}>
                Resetar a senha
            </Link>
            <View style = {styles.RegisterView}>
                <Text style={styles.txtR}>Ainda não tem uma conta?</Text>
                <Link
                    style={styles.signup}
                    to={{ screen: 'Página de login' }}>
                    Registre-se!
                </Link>
            </View>

        </View>
    );
}
