import { Ionicons } from '@expo/vector-icons';
import { TextInput, View, Text } from 'react-native';
import { useState } from 'react';

function Search({ setStories, testStories }) {
  const [filterAge, setFilterAge] = useState('');
  const [filterGenre, setFilterGenre] = useState('');

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

  return (
    <View className="flex flex-col px-2 py-1">
      <View className="flex flex-row justify-between items-center">
        <TextInput
          className="w-3/5 h-10 px-2 rounded-full bg-white"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
        <Ionicons
          name="paw-outline"
          size={44}
          style={{ color: 'black' }}
          onPress={() => applyFilter('age', '3-5')}
        />
        <Ionicons
          name="options-outline"
          size={44}
          style={{ color: 'black' }}
          onPress={() => applyFilter('genre', 'Mystery')}
        />
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
  </View>
  );
}

export default Search;