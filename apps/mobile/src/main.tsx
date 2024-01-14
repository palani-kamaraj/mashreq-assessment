import { AppRegistry } from 'react-native';
import App from './app/app';
import { AppProvider } from '@mobileLib';

function main () {
    return <AppProvider><App/></AppProvider>
}

AppRegistry.registerComponent('Mobile', () => main);
