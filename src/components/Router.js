import { createAppContainer, createSwitchNavigator, withNavigation } from 'react-navigation';
import Login from './Login';
import Home from './Home';

// Rotas

const MainNav  = createSwitchNavigator (
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

);

export default withNavigation(MainNav);
