import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from './src/pages/Home/HomeScreen';
import {LogInScreen} from './src/pages/LogIn/LogInScreen';
import {SignUpScreen} from './src/pages/SignUp/SignUpScreen';
import {RestaurantsScreen} from './src/pages/Restaurants/RestaurantsScreen';
import {baseStyles} from './Styles';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Tyba Test!',
      headerStyle: baseStyles.Header,
      headerTintColor: '#ffffff',
    },
  },
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      title: 'Tyba Test!',
      headerStyle: baseStyles.Header,
      headerTintColor: '#ffffff',
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Tyba Test!',
      headerStyle: baseStyles.Header,
      headerTintColor: '#ffffff',
    },
  },
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: {
      title: 'Tyba Test!',
      headerStyle: baseStyles.Header,
      headerTintColor: '#ffffff',
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;
