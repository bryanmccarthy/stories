import { View, Text } from 'react-native';
import { useLayoutEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

function ProfileScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          onPress={() => {
            navigation.goBack();
          }
        }>
        <Ionicons name="return-down-back" size={34} color="white" />
        </Text>
      ),
      headerShown: true,
      headerTransparent: true,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  return (
    <View className="flex bg-black w-full h-full">
    </View>
  );
}

export default ProfileScreen;