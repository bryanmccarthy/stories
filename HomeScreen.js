import { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Modal, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Stories from './components/Stories/Stories';
import { Ionicons } from '@expo/vector-icons';

const testStories = [
  {
    id: 1,
    title: 'The little ant',
    genre: 'Fiction',
    age: '3-5',
    cover: require('./assets/1.jpeg')
  },
  {
    id: 2,
    title: 'Henry the mouse',
    genre: 'Mystery',
    age: '6-8',
    cover: require('./assets/2.jpeg')
  },
  {
    id: 3,
    title: 'Bob the dog',
    genre: 'Fiction',
    age: '3-5',
    cover: require('./assets/3.png')
  },
  {
    id: 4,
    title: 'The frog prince',
    genre: 'Fantasy',
    age: '3-5',
    cover: require('./assets/4.jpeg')
  },
  {
    id: 5,
    title: 'A day in the life of a cat',
    genre: 'Mystery',
    age: '6-8',
    cover: require('./assets/5.jpeg')
  },
  {
    id: 6,
    title: 'Little blue bird',
    genre: 'Fiction',
    age: '6-8',
    cover: require('./assets/6.jpeg')
  },
  {
    id: 7,
    title: 'Animal farm',
    genre: 'Fairytale',
    age: '3-5',
    cover: require('./assets/7.jpeg')
  },
  {
    id: 8,
    title: 'Snakes and ladders',
    genre: 'Fantasy',
    age: '6-8',
    cover: require('./assets/8.png')
  },
  {
    id: 9,
    title: 'Over the moon',
    genre: 'Sci-fi',
    age: '3-5',
    cover: require('./assets/9.png')
  },
  {
    id: 10,
    title: 'The Big Bang',
    genre: 'Mystery',
    age: '6-8',
    cover: require('./assets/10.jpeg')
  },
  {
    id: 11,
    title: 'The little ant',
    genre: 'Fiction',
    age: '3-5',
    cover: require('./assets/1.jpeg')
  },
  {
    id: 12,
    title: 'Henry the mouse',
    genre: 'Mystery',
    age: '6-8',
    cover: require('./assets/2.jpeg')
  },
  {
    id: 13,
    title: 'Bob the dog',
    genre: 'Fiction',
    age: '3-5',
    cover: require('./assets/3.png')
  },
  {
    id: 14,
    title: 'The frog prince',
    genre: 'Fantasy',
    age: '3-5',
    cover: require('./assets/4.jpeg')
  },
  {
    id: 15,
    title: 'A day in the life of a cat',
    genre: 'Mystery',
    age: '6-8',
    cover: require('./assets/5.jpeg')
  },
  {
    id: 16,
    title: 'Little blue bird',
    genre: 'Fiction',
    cover: require('./assets/6.jpeg')
  },
  {
    id: 17,
    title: 'Animal farm',
    genre: 'Fairytale',
    age: '3-5',
    cover: require('./assets/7.jpeg')
  },
  {
    id: 18,
    title: 'Snakes and ladders',
    genre: 'Fantasy',
    age: '6-8',
    cover: require('./assets/8.png')
  },
  {
    id: 19,
    title: 'Over the moon',
    genre: 'Sci-fi',
    age: '3-5',
    cover: require('./assets/9.png')
  },
  {
    id: 20,
    title: 'The Big Bang',
    genre: 'Mystery',
    age: '6-8',
    cover: require('./assets/10.jpeg')
  },
];

function HomeScreen({ navigation }) {
  const [stories, setStories] = useState(testStories);
  const [modalVisible, setModalVisible] = useState(false);
  const [storyID, setStoryID] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [storyGenre, setStoryGenre] = useState('');
  const [storyAge, setStoryAge] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleShowModal = (story) => {
    setStoryID(story.id);
    setStoryTitle(story.title);
    setStoryGenre(story.genre);
    setStoryAge(story.age);
    setModalVisible(true);
  }

  const handleStoryNavigation = (storyID, storyTitle) => {
    setModalVisible(false);

    navigation.navigate('Story', {
      storyID: storyID,
      storyTitle: storyTitle
    });
  }


  return (
    <SafeAreaView className="bg-indigo-200 w-full h-full">
      {/* Modal */}
      <Modal
        animationType="none"
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
              <Text className="text-lg font-bold mt-4">Age: {storyAge}</Text>
              {/* Book Icon */}
              <TouchableWithoutFeedback onPress={() => handleStoryNavigation(storyID, storyTitle)}>
                <View className="flex flex-row items-center justify-center border-solid border rounded-xl p-2 m-4">
                  <Text className="text-lg font-bold mr-4">Read</Text>
                  <Ionicons
                    name="book"
                    size={32}
                    style={{ color: 'black' }}
                  />
              </View>
              </TouchableWithoutFeedback>
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