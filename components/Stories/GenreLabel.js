import { View, Text } from 'react-native';

function GenreLabel({ genre }) {
  return (
    <View className="mt-4 mx-4">
      <Text className="text-xl text-white font-bold">{genre}</Text>
    </View>
  );
}

export default GenreLabel;