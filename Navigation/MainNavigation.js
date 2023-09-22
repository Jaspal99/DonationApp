const {createStackNavigator} = require('@react-navigation/stack');
const {default: Home} = require('../Screens/Home/Home');

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
