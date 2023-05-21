import { useLayoutEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Page from './components/Stories/Page';

function StoryScreen({ route, navigation }) {
  const { id, title } = route.params;
  const length = 10; // TODO: get from params
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          onPress={() => {
            navigation.goBack();
          }
        }>
        <Ionicons name="return-down-back" size={44} color="white" />
        </Text>
      ),
      headerShown: true,
      headerTransparent: true,
      headerTintColor: 'black',
      title: title,
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
      }
    });
  }, [navigation]);

  return (
    <View className="flex justify-center items-center w-full h-full bg-black">
      <Page page={page} />
      {/* Pagination Buttons */}
      <View className="flex flex-row justify-between items-center w-full h-1/6">
        <Text
          onPress={() => {
            if (page > 1) {
              setPage(page - 1);
            }
        }}>
          <Ionicons name="chevron-back" size={44} color="white" />
        </Text>
        <Text
          onPress={() => {
            if (page < length) {
              setPage(page + 1);
            }
        }}>
          <Ionicons name="chevron-forward" size={44} color="white" />
        </Text>
      </View>
    </View>        
  );
}

export default StoryScreen;