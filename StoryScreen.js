import { Text, View } from 'react-native';

function StoryScreen({ route, navigation }) {

  const { id, name } = route.params;

  return (
    <View>
      <Text>Story Screen</Text>
      <Text>Story ID: {id}</Text>
      <Text>Story Name: {name}</Text>
    </View>
  );
}

export default StoryScreen;