import { useLayoutEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const stories = [
  {
    id: 1,
    title: 'The little ant',
    cover: require('./assets/1.jpeg')
  },
  {
    id: 2,
    title: 'Henry the mouse',
    cover: require('./assets/2.jpeg')
  },
  {
    id: 3,
    title: 'The little ant',
    cover: require('./assets/3.png')
  },
  {
    id: 4,
    title: 'Henry the mouse',
    cover: require('./assets/4.jpeg')
  },
  {
    id: 5,
    title: 'The little ant',
    cover: require('./assets/5.jpeg')
  },
  {
    id: 6,
    name: 'Henry the mouse',
    cover: require('./assets/6.jpeg')
  },
  {
    id: 7,
    title: 'The little ant',
    cover: require('./assets/7.jpeg')
  },
  {
    id: 8,
    title: 'Henry the mouse',
    cover: require('./assets/8.png')
  },
  {
    id: 9,
    title: 'The little ant',
    cover: require('./assets/9.png')
  },
  {
    id: 10,
    title: 'Henry the mouse',
    cover: require('./assets/10.jpeg')
  },
];

function HomeScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-indigo-100 w-full h-full">
      {/* Header */}
      <View className="flex flex-row justify-between items-center px-2 py-1 bg-indigo-100">
        <Text className="text-2xl">Stories</Text>
        <Ionicons 
          name="person-circle-outline" 
          size={44} 
          color="black" 
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      {/* Search & filters */}
      <View className="relative flex flex-row border-solid border rounded-2xl h-8 my-2 px-2 items-center border-black mt-1 mx-1 bg-indigo-100">
          <Ionicons name="search-outline" size={18} color="black" />
          <TextInput className="absolute w-6/12 px-7 py-2" placeholder="Search" />
          <View className="absolute right-1 flex flex-row">
            <Ionicons name="filter-outline" size={18} color="black" />
            <Text className="text-sm px-1">Filters</Text>
          </View>
      </View>
      {/* Stories */}
      <ScrollView contentContainerStyle={styles.wrapper}>
        {stories.map(story => (
          <View key={story.id} className="relative shadow-md shadow-slate-400 w-40 h-52 m-4 mb-6">
            <ImageBackground source={story.cover} style={{ width: '100%', height: '100%' }} imageStyle={{ borderRadius: 8 }}>
              <View className="absolute right-2 -bottom-4 rounded-full px-2 pt-2 pb-1 bg-indigo-100">
              <Ionicons
                name="book"
                size={28} 
                color="black"
                onPress={() => navigation.navigate('Story', { id: story.id, title: story.title  })}
              />
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for ScrollView
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 120,
  },
};

export default HomeScreen;