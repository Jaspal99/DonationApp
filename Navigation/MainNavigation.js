import Login from '../Screens/Login/Login';
import Registration from '../Screens/Registration/Registration';
import SingleDonationItem from '../Screens/SingleDonationItem/SingleDonationItem';
import {Routes} from './Routes';

const {createStackNavigator} = require('@react-navigation/stack');
const {default: Home} = require('../Screens/Home/Home');

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
