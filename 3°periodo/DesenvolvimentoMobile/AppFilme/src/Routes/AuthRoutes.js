import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import ForgetPasswordPage from '../Pages/ForgetPasswordPage/ForgetPasswordPage';

const Stack =  createStackNavigator();

export default function AuthRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Página de login" component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name = "Página de registro" component={RegisterPage}/>
            <Stack.Screen name = "Página de recuperar senha" component={ForgetPasswordPage}/>
        </Stack.Navigator>
    );
}