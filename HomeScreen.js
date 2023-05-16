import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, Button, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
    <SafeAreaView className="bg-indigo-50">
      {/* Header */}
      <View className="flex flex-row justify-between items-center px-2 py-1 bg-indigo-300">
        <Text className="text-xl">Stories</Text>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>
      {/* Search */}
      <View className="relative flex flex-row items-center px-2 py-2">
        <Ionicons name="search-outline" size={18} color="black" />
        <TextInput className="absolute w-32 px-7" placeholder="Search" />
      </View>
      {/* Stories */}
      <ScrollView contentContainerStyle={styles.wrapper}>
        {stories.map(story => (
          <View key={story.id} className="relative border-solid border-2 rounded-lg w-44 h-44 m-2 bg-indigo-300">
            {/* IMAGE */}
            <Text className="text-black text-sm">{story.name}</Text>
            {/* Button could be Lock Icon if unavailable to user */}
            {/* <Ionicons name="lock-closed-outline" size={32} color="black" /> */}
            <View className="absolute right-2 -bottom-3 border-solid border-2 rounded-full px-2 pt-2 pb-1 bg-slate-200">
            <Ionicons
              name="book"
              size={28} 
              color="rgb(49 46 129)"
              onPress={() => navigation.navigate('Story', { id: story.id, name: story.name  })}
            />
            </View>
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