import { useLayoutEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TextInput, ImageBackground, Modal, TouchableWithoutFeedback } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

const stories = [
  {
    id: 1,
    title: 'The little ant',
    genre: 'Fiction',
    cover: require('./assets/1.jpeg')
  },
  {
    id: 2,
    title: 'Henry the mouse',
    genre: 'Mystery',
    cover: require('./assets/2.jpeg')
  },
  {
    id: 3,
    title: 'Bob the dog',
    genre: 'Fiction',
    cover: require('./assets/3.png')
  },
  {
    id: 4,
    title: 'The frog prince',
    genre: 'Fantasy',
    cover: require('./assets/4.jpeg')
  },
  {
    id: 5,
    title: 'A day in the life of a cat',
    genre: 'Mystery',
    cover: require('./assets/5.jpeg')
  },
  {
    id: 6,
    name: 'Little blue bird',
    genre: 'Fiction',
    cover: require('./assets/6.jpeg')
  },
  {
    id: 7,
    title: 'Animal farm',
    genre: 'Fairytale',
    cover: require('./assets/7.jpeg')
  },
  {
    id: 8,
    title: 'Snakes and ladders',
    genre: 'Fantasy',
    cover: require('./assets/8.png')
  },
  {
    id: 9,
    title: 'Over the moon',
    genre: 'Sci-fi',
    cover: require('./assets/9.png')
  },
  {
    id: 10,
    title: 'The Big Bang',
    genre: 'Mystery',
    cover: require('./assets/10.jpeg')
  },
];

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [storyTitle, setStoryTitle] = useState('');
  const [storyGenre, setStoryGenre] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleShowModal = (story) => {
    setStoryTitle(story.title);
    setStoryGenre(story.genre);
    setModalVisible(true);
  }

  return (
    <SafeAreaView className="bg-indigo-100 w-full h-full">
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }
      }>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="flex flex-col justify-center items-center h-full">
            <View className="flex flex-col justify-center items-center bg-white w-11/12 h-1/2 rounded-2xl">
              <Text className="text-2xl font-bold mt-4">Story Info</Text>
              <Text className="text-lg font-bold mt-4">Title: {storyTitle}</Text>
              <Text className="text-lg font-bold mt-4">Genre: {storyGenre}</Text>
              <Text className="text-lg font-bold mt-4">Description</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
              {/* Info Icon */}
              <View className="absolute -bottom-5 right-14 rounded-full px-2 pt-2 pb-1 bg-white">
                <Ionicons
                  name="help-outline"
                  size={32}
                  style={{ color: 'black' }}
                  onPress={() => handleShowModal(story)}
                />
              </View>
              {/* Book Icon */}
              <View className="absolute right-1 -bottom-5 rounded-full px-2 pt-2 pb-1 bg-white">
                <Ionicons
                  name="book"
                  size={32} 
                  style={{ color: 'black' }}
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