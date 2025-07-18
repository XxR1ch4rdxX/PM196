import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import {Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';


import Home from './screens/home';
import Settings from './screens/settings';
import Profile from './screens/profile';
import User_Details from './screens/user_details';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Profiledetails=()=>(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="User_Details" component={User_Details} />
      </Stack.Navigator>
);





export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({route}) =>({
          headerShown: false,
          tabBarIcon: ({ color, size}) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height : 60,},
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Profile" component={Profiledetails} />
      </Tab.Navigator>
     
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
