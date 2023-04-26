import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens

import Game from './screens/Game';
import Register from './screens/Register';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='TabsNavigation'
          component={TabsNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Game'
          component={Game}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName='Login'
      activeColor='#000'
      inactiveColor='#000'
      barStyle={{ backgroundColor: 'rgba(0, 194, 204, 0.1)' }}
    >
      <Tabs.Screen
        style={{ fontWeight: 'bold' }}
        name='Login'
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={'#00c2cc'} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}