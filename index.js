import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/components/Router';

AppRegistry.registerComponent(appName, () => App);
