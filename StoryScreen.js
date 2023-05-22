import { useLayoutEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Page from './components/Stories/Page';

function StoryScreen({ route, navigation }) {
  const { id, title } = route.params;
  const length = 10;
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([
    require('./assets/monkey/monkey1.jpeg'),
    require('./assets/monkey/monkey2.jpeg'),
    require('./assets/monkey/monkey3.jpeg'),
    require('./assets/monkey/monkey4.jpeg'),
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text
          onPress={() => {
            navigation.goBack();
          }
        }>
        <Ionicons name="return-down-back" size={48} color="white" />
        </Text>
      ),
      headerShown: true,
      headerTransparent: true,
      headerTintColor: 'black',
      title: title,
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
      }
    });
  }, [navigation]);

  return (
    <View className="flex justify-center items-center w-full h-full bg-black">
      <Page page={page} setPage={setPage} length={length} images={images} />
    </View>        
  );
}

export default StoryScreen;