import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens

import Game from './screens/Game';
import Register from './screens/Register';
import Login from './screens/Login';
import Loading from './screens/Loading';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name='Loading'
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Logar-se'
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Registrar-se'
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
      initialRouteName='Logar-se'
      activeColor='rgba(33, 150, 243, .9)'
      inactiveColor='#fff'
      barStyle={{ backgroundColor: 'rgba(33, 150, 243, .1)' }}
    >
      <Tabs.Screen
        style={{ fontWeight: 'bold' }}
        name='Logar-se'
        component={Login}
        options={{
          tabBarLabel: 'Logar-se',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={'rgb(33, 150, 243)'} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}