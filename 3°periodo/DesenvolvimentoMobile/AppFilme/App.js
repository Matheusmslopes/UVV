import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterPage from './src/Pages/RegisterPage/RegisterPage';
import LoginPage from './src/Pages/LoginPage/LoginPage';
import FilmePage from './src/Pages/FilmePage/FilmePage';

const Stack =  createStackNavigator();

export default function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Página de login" component={LoginPage}/>
          <Stack.Screen name = "Página de registro" component={RegisterPage}/>
          <Stack.Screen name = "Página de filmes" component={FilmePage}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
