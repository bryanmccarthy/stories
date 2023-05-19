import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import StoryScreen from './StoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen 
          name="Story" 
          component={StoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

