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
      <Page page={page} setPage={setPage} length={length} />
    </View>        
  );
}

export default StoryScreen;