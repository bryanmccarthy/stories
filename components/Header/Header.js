import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLayoutEffect } from 'react';

function Header({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex flex-row justify-between items-center px-2 py-1">
      <Text className="text-3xl text-white">Smol Stories</Text>
      <Ionicons 
        name="person-circle" 
        size={48} 
        color="white" 
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default Header;