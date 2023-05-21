import { View, Text } from 'react-native';

function Page({ page }) {

  return (
    <View className="flex justify-center">
      <Text className="text-3xl text-white">Page: {page}</Text>
    </View>
  );
}

export default Page;