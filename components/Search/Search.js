import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

function Search({ setStories, testStories }) {

  const handleSearch = (text) => {
    const filteredStories = testStories.filter(story => story.title.toLowerCase().includes(text.toLowerCase()));
    setStories(filteredStories);
  }

  return (
    <View className="flex flex-row justify-between items-center px-2 py-1">
        <TextInput
          className="w-3/5 h-10 px-2 rounded-full bg-white"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
        <Ionicons
          name="options-outline"
          size={44}
          style={{ color: 'black' }}
        />
      </View>
  );
}

export default Search;