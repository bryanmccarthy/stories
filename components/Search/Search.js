import { Ionicons } from '@expo/vector-icons';
import { TextInput, View, Text, Modal, TouchableWithoutFeedback, Switch } from 'react-native';
import { useState } from 'react';

function Search({ setStories, testStories }) {
  const [filterAge, setFilterAge] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [ageModalVisible, setAgeModalVisible] = useState(false);
  const [genreModalVisible, setGenreModalVisible] = useState(false);

  // Age Switches
  const [ageOneSwitch, setAgeOneSwitch] = useState(false);
  const [ageTwoSwitch, setAgeTwoSwitch] = useState(false);
  const [ageThreeSwitch, setAgeThreeSwitch] = useState(false);

  // Genre Switches
  const [genreFictionSwitch, setGenreFictionSwitch] = useState(false);
  const [genreMysterySwitch, setGenreMysterySwitch] = useState(false);
  const [genreFantasySwitch, setGenreFantasySwitch] = useState(false);
  const [genreFairytaleSwitch, setGenreFairytaleSwitch] = useState(false);
  const [genreSciFiSwitch, setGenreSciFiSwitch] = useState(false);

  const handleSearch = (text) => {
    const filteredStories = testStories.filter(story => story.title.toLowerCase().includes(text.toLowerCase()));
    setStories(filteredStories);
  }

  const addFilter = (filterType, filter) => {
    if (filterType === 'genre') {
      setFilterGenre(filter);
    } else if (filterType === 'age') {
      setFilterAge(filter);
    }
  }

  const removeFilter = (filter) => {
    if (filter === 'genre') {
      setFilterGenre('');
      setGenreFictionSwitch(false);
      setGenreMysterySwitch(false);
      setGenreFantasySwitch(false);
      setGenreFairytaleSwitch(false);
      setGenreSciFiSwitch(false);
    } else if (filter === 'age') {
      setFilterAge('');
      setAgeOneSwitch(false);
      setAgeTwoSwitch(false);
      setAgeThreeSwitch(false);
    }
  }

  const handleAgeModal = () => {
    setAgeModalVisible(!ageModalVisible);
  }

  const handleGenreModal = () => {
    setGenreModalVisible(!genreModalVisible);
  }

  const handleAgeSwitch = (age) => {
    if (age === '3-5') {
      if (!ageOneSwitch) {
        addFilter('age', age)
      } else {
        removeFilter('age');
      }
      setAgeTwoSwitch(false);
      setAgeThreeSwitch(false);
      setAgeOneSwitch(!ageOneSwitch);
    } else if (age === '6-8') {
      if (!ageTwoSwitch) {
        addFilter('age', age)
      } else {
        removeFilter('age');
      }
      setAgeOneSwitch(false);
      setAgeThreeSwitch(false);
      setAgeTwoSwitch(!ageTwoSwitch);
    } else if (age === '9-11') {
      if (!ageThreeSwitch) {
        addFilter('age', age)
      } else {
        removeFilter('age');
      }
      setAgeOneSwitch(false);
      setAgeTwoSwitch(false);
      setAgeThreeSwitch(!ageThreeSwitch);
    }
  }

  const handleGenreSwitch = (genre) => {
    if (genre === 'Fiction') {
      if (!genreFictionSwitch) {
        addFilter('genre', genre)
      } else {
        removeFilter('genre');
      }
      setGenreMysterySwitch(false);
      setGenreFantasySwitch(false);
      setGenreFairytaleSwitch(false);
      setGenreSciFiSwitch(false);
      setGenreFictionSwitch(!genreFictionSwitch);
    } else if (genre === 'Mystery') {
      if (!genreMysterySwitch) {
        addFilter('genre', genre)
      } else {
        removeFilter('genre');
      }
      setGenreFictionSwitch(false);
      setGenreFantasySwitch(false);
      setGenreFairytaleSwitch(false);
      setGenreSciFiSwitch(false);
      setGenreMysterySwitch(!genreMysterySwitch);
    } else if (genre === 'Fantasy') {
      if (!genreFantasySwitch) {
        addFilter('genre', genre)
      } else {
        removeFilter('genre');
      }
      setGenreFictionSwitch(false);
      setGenreMysterySwitch(false);
      setGenreFairytaleSwitch(false);
      setGenreSciFiSwitch(false);
      setGenreFantasySwitch(!genreFantasySwitch);
    } else if (genre === 'Fairytale') {
      if (!genreFairytaleSwitch) {
        addFilter('genre', genre)
      } else {
        removeFilter('genre');
      }
      setGenreFictionSwitch(false);
      setGenreMysterySwitch(false);
      setGenreFantasySwitch(false);
      setGenreSciFiSwitch(false);
      setGenreFairytaleSwitch(!genreFairytaleSwitch);
    } else if (genre === 'Sci-Fi') {
      if (!genreSciFiSwitch) {
        addFilter('genre', genre)
      } else {
        removeFilter('genre');
      }
      setGenreFictionSwitch(false);
      setGenreMysterySwitch(false);
      setGenreFantasySwitch(false);
      setGenreFairytaleSwitch(false);
      setGenreSciFiSwitch(!genreSciFiSwitch);
    }
  }

  return (
    <View className="flex flex-col px-2 py-1">
      <View className="flex flex-row justify-between items-center">
        <TextInput
          className="w-2/5 h-10 px-2 rounded-full bg-white"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
        {/* Filters */}
        <View className="flex flex-row">
          {/* Age Select */}
          <TouchableWithoutFeedback onPress={handleAgeModal}>
            <View className={`flex flex-row items-center mx-1 rounded-lg p-1 ${ageModalVisible ? 'bg-black' : 'bg-white'}`}>
              <Text className={`text-xl mr-2 ${ageModalVisible ? 'text-white' : 'text-black'}`}>Age</Text>
              <Ionicons
                name="chevron-down"
                size={28}
                style={{ color: ageModalVisible ? 'white' : 'black' }}
              />
            </View>
          </TouchableWithoutFeedback>
          {/* Genre Select */}
          <TouchableWithoutFeedback onPress={handleGenreModal}>
            <View className={`flex flex-row items-center mx-1 rounded-lg p-1 ${genreModalVisible ? 'bg-black' : 'bg-white'}`}>
              <Text className={`text-xl mr-2 ${genreModalVisible ? 'text-white' : 'text-black'}`}>Genre</Text>
              <Ionicons
                name="chevron-down"
                size={28}
                style={{ color: genreModalVisible ? 'white' : 'black' }}
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
        animationType="none" 
        transparent={true} 
        visible={ageModalVisible}
        onRequestClose={() => {
          setAgeModalVisible(false);
        }
      }>
        <TouchableWithoutFeedback onPress={() => setAgeModalVisible(false)}>
          <View className="relative flex h-full">
            <View className="absolute right-1 top-40 flex flex-col justify-center items-center h-64 w-64 p-10 bg-white rounded-xl">
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">3 - 5</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterAge ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={ageOneSwitch}
                  onValueChange={() => handleAgeSwitch('3-5')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">6 - 8</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterAge ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={ageTwoSwitch}
                  onValueChange={() => handleAgeSwitch('6-8')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">9-11</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterAge ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={ageThreeSwitch}
                  onValueChange={() => handleAgeSwitch('9-11')}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* Genre Modal */}
      <Modal 
        animationType="none" 
        transparent={true} 
        visible={genreModalVisible}
        onRequestClose={() => {
          setGenreModalVisible(false);
        }
      }>
        <TouchableWithoutFeedback onPress={() => setGenreModalVisible(false)}>
          <View className="relative flex justify-center items-center h-full">
            <View className="absolute right-1 top-40 flex flex-col justify-center items-center h-64 w-64 p-5 bg-white rounded-xl">
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">Fiction</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterGenre ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={genreFictionSwitch}
                  onValueChange={() => handleGenreSwitch('Fiction')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">Mystery</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterGenre ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={genreMysterySwitch}
                  onValueChange={() => handleGenreSwitch('Mystery')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">Fantasy</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterGenre ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={genreFantasySwitch}
                  onValueChange={() => handleGenreSwitch('Fantasy')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">Fairytale</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterGenre ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={genreFairytaleSwitch}
                  onValueChange={() => handleGenreSwitch('Fairytale')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">Sci-Fi</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={filterGenre ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  value={genreSciFiSwitch}
                  onValueChange={() => handleGenreSwitch('Sci-Fi')}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
  </View>
  );
}

export default Search;