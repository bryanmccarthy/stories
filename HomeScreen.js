import { useLayoutEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TextInput, ImageBackground, Modal, TouchableWithoutFeedback } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Stories from './components/Stories/Stories';

const testStories = [
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
    title: 'Little blue bird',
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
  const [stories, setStories] = useState(testStories);
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
    <SafeAreaView className="bg-indigo-300 w-full h-full">
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
            <View className="flex flex-col justify-center items-center bg-white w-10/12 h-1/2 rounded-2xl">
              <Text className="text-2xl font-bold mt-4">Story Info</Text>
              <Text className="text-lg font-bold mt-4">Title: {storyTitle}</Text>
              <Text className="text-lg font-bold mt-4">Genre: {storyGenre}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Header navigation={navigation} />
      <Search setStories={setStories} testStories={testStories} />
      <Stories stories={stories} navigation={navigation} handleShowModal={handleShowModal} />
      
    </SafeAreaView>
  );
}

export default HomeScreen;