import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function StoryScreen({ route, navigation }) {
  const { id, title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          onPress={() => {
            navigation.goBack();
          }
        }>
        <Ionicons name="return-down-back" size={34} color="black" />
        </Text>
      ),
      headerShown: true,
      headerTransparent: true,
      headerTintColor: 'black',
      title: title,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    });
  }, [navigation]);

  return (
    <View className="flex bg-indigo-200 w-full h-full">
    </View>
  );
}

export default StoryScreen;