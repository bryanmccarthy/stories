import { Ionicons } from '@expo/vector-icons';
import { TextInput, View, Text } from 'react-native';
import { useState } from 'react';

function Search({ setStories, testStories }) {
  const [filters, setFilters] = useState([]);

  const handleSearch = (text) => {
    const filteredStories = testStories.filter(story => story.title.toLowerCase().includes(text.toLowerCase()));
    setStories(filteredStories);
  }

  const handleSetFilter = (filter) => {
    setFilters([...filters, filter]);
  }

  const handleRemoveFilter = (filter) => {
    const newFilters = filters.filter(f => f !== filter);
    setFilters(newFilters);
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
          name="options-outline"
          size={44}
          style={{ color: 'black' }}
          onPress={() => handleSetFilter('test')}
        />
      </View>
      {/* Filters active */}
      <View className="flex flex-row items-center">
        {filters.map(filter => (
          <View key={filter} className="flex flex-row rounded-full items-center py-0.5 px-2 m-1 bg-white">
            <Text className="text-xl mr-2">{filter}</Text>
            <Ionicons
              name="close-circle"
              size={28}
              style={{ color: 'black' }}
              onPress={() => handleRemoveFilter(filter)}
            />
          </View>
        ))}
      </View>
  </View>
  );
}

export default Search;