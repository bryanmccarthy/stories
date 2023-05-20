import { Ionicons } from '@expo/vector-icons';
import { TextInput, View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

function Search({ setStories, testStories }) {
  const [filterAge, setFilterAge] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [ageModalVisible, setAgeModalVisible] = useState(false);
  const [genreModalVisible, setGenreModalVisible] = useState(false);

  const handleSearch = (text) => {
    const filteredStories = testStories.filter(story => story.title.toLowerCase().includes(text.toLowerCase()));
    setStories(filteredStories);
  }

  const applyFilter = (filterType, filter) => {
    if (filterType === 'genre') {
      setFilterGenre(filter);
    } else if (filterType === 'age') {
      setFilterAge(filter);
    }
  }

  const removeFilter = (filter) => {
    if (filter === 'genre') {
      setFilterGenre('');
    } else if (filter === 'age') {
      setFilterAge('');
    }
  }

  const handleAgeModal = () => {
    setAgeModalVisible(!ageModalVisible);
  }

  const handleGenreModal = () => {
    setGenreModalVisible(!genreModalVisible);
  }

  return (
    <View className="flex flex-col px-2 py-1">
      <View className="flex flex-row justify-between items-center">
        <TextInput
          className="w-1/2 h-10 px-2 rounded-full bg-white"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
        {/* Filters */}
        <View className="flex flex-row">
          {/* Age Select */}
          <TouchableWithoutFeedback onPress={handleAgeModal}>
            <View className="flex flex-row items-center mx-2" onPress={handleAgeModal}>
              <Text className="text-xl mr-2">Age</Text>
              <Ionicons
                name="chevron-down"
                size={28}
                style={{ color: 'black' }}
              />
            </View>
          </TouchableWithoutFeedback>
          {/* Genre Select */}
          <TouchableWithoutFeedback onPress={handleGenreModal}>
            <View className="flex flex-row items-center mx-2">
              <Text className="text-xl mr-2">Genre</Text>
              <Ionicons
                name="chevron-down"
                size={28}
                style={{ color: 'black' }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View> 
      </View>
      {/* Filters active */}
      <View className="flex flex-row items-center">
        { filterAge && (
          <View className="flex flex-row rounded-full items-center py-0.5 px-2 m-1 bg-white">
            <Text className="text-xl mr-2">{filterAge}</Text>
            <Ionicons
              name="close-circle"
              size={28}
              style={{ color: 'black' }}
              onPress={() => removeFilter('age')}
            />
          </View>
        )}
        { filterGenre && (
          <View className="flex flex-row rounded-full items-center py-0.5 px-2 m-1 bg-white">
            <Text className="text-xl mr-2">{filterGenre}</Text>
            <Ionicons
              name="close-circle"
              size={28}
              style={{ color: 'black' }}
              onPress={() => removeFilter('genre')}
            />
          </View>
        )}
      </View>
      {/* Age Modal */}
      <Modal 
        animationType="slide" 
        transparent={true} 
        visible={ageModalVisible}
        onRequestClose={() => {
          setAgeModalVisible(false);
        }
      }>
        <TouchableWithoutFeedback onPress={() => setAgeModalVisible(false)}>
          <View className="flex flex-col justify-center items-center h-full">
            <View className="flex flex-col justify-center items-center h-44 w-44 bg-white">
              <Text>Age</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* Genre Modal */}
      <Modal 
        animationType="slide" 
        transparent={true} 
        visible={genreModalVisible}
        onRequestClose={() => {
          setGenreModalVisible(false);
        }
      }>
        <TouchableWithoutFeedback onPress={() => setGenreModalVisible(false)}>
          <View className="flex flex-col justify-center items-center h-full">
            <View className="flex flex-col justify-center items-center h-44 w-44 bg-white">
              <Text>Genre</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
  </View>
  );
}

export default Search;