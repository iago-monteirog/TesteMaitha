import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';

// Rotas

const MainNav  = createStackNavigator (
{
    Login: {
        screen: Login,
        navigationOptions: {
            header: 'Login'
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home'
        }
    }
}

)
export default createAppContainer(MainNav);