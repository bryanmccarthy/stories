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
          {/* back icon */}
          <Ionicons name="return-up-back" size={36} color="black" />
        </Text>
      ),
    });
  }, [navigation]);

  return (
    <View className="flex">
      <View className="bg-indigo-200 m-10 mt-48 p-10">
        <Text>Story Screen</Text>
        <Text>Story ID: {id}</Text>
        <Text>Story Name: {name}</Text>
      </View>
    </View>
  );
}

export default StoryScreen;