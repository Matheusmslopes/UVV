import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { AuthProvider } from './Contexts/AuthContext';


export default function App() {
    return(
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    );
}