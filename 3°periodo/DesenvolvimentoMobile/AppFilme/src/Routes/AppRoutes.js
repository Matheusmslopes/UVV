import { createStackNavigator } from '@react-navigation/stack';
import FilmePage from '../Pages/FilmePage/FilmePage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';

const Stack =  createStackNavigator();

export default function AppRoutes(){
    return (
        <Stack.Navigator>
          <Stack.Screen name = "Página de filmes" component={FilmePage} options={{headerShown: false}}/>
          <Stack.Screen name = "Página de detalhes" component={MovieDetailsPage}/>
        </Stack.Navigator>
    )
}