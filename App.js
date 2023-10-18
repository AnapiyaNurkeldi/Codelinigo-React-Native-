import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/Main';
import Register from './src/registration/register';
import Login from './src/login/login';
import Start from './src/start/start';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{
            title: 'Сәлем',
            headerStyle: {
              backgroundColor: '#010011',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{
            title: 'Тіркелу',
            headerStyle: {
              backgroundColor: '#010011',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
         <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{  
            title: 'Кіру',
            headerStyle: {
              backgroundColor: '#010011',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
         <Stack.Screen 
          name="Start" 
          component={Start} 
          options={{  
            title: 'Start',
            headerStyle: {
              backgroundColor: '#010011',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

