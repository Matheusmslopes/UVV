import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { useAuth } from "../Contexts/AuthContext";
import { View, ActivityIndicator } from "react-native";
import styles from "../Assets/styles/styleActivity";

export default function Routes(){
    
    const { logado, loading } = useAuth();

    if(loading){
        return(
            <View style = {styles.activity}>
                <ActivityIndicator size = {'large'}/>
            </View>
        )
    }
    
    return(
        logado == true ? <AppRoutes/> : <AuthRoutes/>
    );
}