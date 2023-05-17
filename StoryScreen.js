import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function StoryScreen({ route, navigation }) {
  const { id, name } = route.params;

  React.useLayoutEffect(() => {
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
      title: name,
      animation: 'easeInEaseOut',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    });
  }, [navigation]);

  return (
    <View className="flex flex-1 bg-indigo-100">
    </View>
  );
}

export default StoryScreen;