import { View, Text } from 'react-native';

function Page({ page }) {

  return (
    <View className="flex justify-center">
      <Text className="text-3xl">Page: {page}</Text>
    </View>
  );
}

export default Page;