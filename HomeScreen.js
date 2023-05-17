import { useLayoutEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// {/* Button could be Lock Icon if unavailable to user */}
            // {/* <Ionicons name="lock-closed-outline" size={32} color="black" /> */}
const stories = [
  {
    id: 1,
    name: 'The little ant',
  },
  {
    id: 2,
    name: 'Henry the mouse',
  },
  {
    id: 3,
    name: 'The little ant',
  },
  {
    id: 4,
    name: 'Henry the mouse',
  },
  {
    id: 5,
    name: 'The little ant',
  },
  {
    id: 6,
    name: 'Henry the mouse',
  },
  {
    id: 7,
    name: 'The little ant',
  },
  {
    id: 8,
    name: 'Henry the mouse',
  },
  {
    id: 9,
    name: 'The little ant',
  },
];

function HomeScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-indigo-100">
      {/* Header */}
      <View className="flex flex-row justify-between items-center px-2 py-1 bg-indigo-100">
        <Text className="text-xl">Stories</Text>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>
      {/* Search & filters */}
      <View className="relative flex flex-row border-solid border rounded-2xl h-8 px-2 items-center border-black mt-1 mx-1 bg-indigo-100">
          <Ionicons name="search-outline" size={18} color="black" />
          <TextInput className="absolute w-40 px-7 py-2" placeholder="Search" />
          <View className="absolute right-1 flex flex-row">
            <Ionicons name="filter-outline" size={18} color="black" />
            <Text className="text-sm px-1">Filters</Text>
          </View>
      </View>
      {/* Stories */}
      <ScrollView contentContainerStyle={styles.wrapper}>
        {stories.map(story => (
          <View key={story.id} className="relative shadow-md shadow-slate-400 w-40 h-40 m-3">
            <ImageBackground source={require('./assets/elephant.jpeg')} style={{ width: '100%', height: '100%' }} imageStyle={{ borderRadius: 8 }}>
              <View className="absolute right-1.5 -bottom-4 border-solid border rounded-full px-2 pt-2 pb-1 bg-indigo-100">
              <Ionicons
                name="book"
                size={28} 
                color="black"
                onPress={() => navigation.navigate('Story', { id: story.id, name: story.name  })}
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
  },
};

export default HomeScreen;