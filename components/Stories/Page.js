import { View, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Page({ page, setPage, length, images }) {

  return (
    <ImageBackground className="flex justify-center items-center w-full h-full" source={images[page-1]}>
      <Text className="text-3xl text-white">Page: {page}</Text>

      {/* Pagination Buttons */}
      <View className="absolute bottom-20 flex flex-row justify-between items-center w-4/5">
        <Text
          onPress={() => {
            if (page > 1) {
              setPage(page - 1);
            }
        }}>
          <Ionicons name="chevron-back" size={56} color="white" />
        </Text>
        <Text
          onPress={() => {
            if (page < length) {
              setPage(page + 1);
            }
        }}>
          <Ionicons name="chevron-forward" size={56} color="white" />
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Page;