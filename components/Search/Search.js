import { Ionicons } from '@expo/vector-icons';
import { TextInput, View, Text, Modal, TouchableWithoutFeedback, Switch } from 'react-native';
import { useState } from 'react';

function Search({ setStories, testStories }) {
  const [filterAge, setFilterAge] = useState('');
  const [ageModalVisible, setAgeModalVisible] = useState(false);
  const [filteredStories, setFilteredStories] = useState(testStories);

  // Age Switches
  const [ageOneSwitch, setAgeOneSwitch] = useState(false);
  const [ageTwoSwitch, setAgeTwoSwitch] = useState(false);
  const [ageThreeSwitch, setAgeThreeSwitch] = useState(false);

  const handleSearch = (text) => {
    const results = filteredStories.filter(story => story.title.toLowerCase().includes(text.toLowerCase()));
    setStories(results);
  }

  const addFilter = (filter) => {
    const filteredStories = testStories.filter(story => story.age === filter);
    setFilteredStories(filteredStories);
    setStories(filteredStories);

    setFilterAge(filter);
  }

  const removeFilter = (filter) => {
    setStories(testStories);
    setFilteredStories(testStories);

    setFilterAge('');
    setAgeOneSwitch(false);
    setAgeTwoSwitch(false);
    setAgeThreeSwitch(false);
  }

  const handleAgeModal = () => {
    setAgeModalVisible(!ageModalVisible);
  }

  const handleAgeSwitch = (age) => {
    if (age === '3-5') {
      if (!ageOneSwitch) {
        addFilter(age)
      } else {
        removeFilter('age');
      }
      setAgeTwoSwitch(false);
      setAgeThreeSwitch(false);
      setAgeOneSwitch(!ageOneSwitch);
    } else if (age === '6-8') {
      if (!ageTwoSwitch) {
        addFilter(age)
      } else {
        removeFilter('age');
      }
      setAgeOneSwitch(false);
      setAgeThreeSwitch(false);
      setAgeTwoSwitch(!ageTwoSwitch);
    } else if (age === '9-11') {
      if (!ageThreeSwitch) {
        addFilter(age)
      } else {
        removeFilter('age');
      }
      setAgeOneSwitch(false);
      setAgeTwoSwitch(false);
      setAgeThreeSwitch(!ageThreeSwitch);
    }
  }

  return (
    <View className="flex flex-col px-2 py-1">
      <View className="flex flex-row justify-between items-center">
        <TextInput
          className="w-1/2 h-10 px-2 shadow-sm shadow-slate-400 rounded-full bg-white"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
        {/* Filters */}
        <View className="flex flex-row">
          {/* Age Select */}
          <TouchableWithoutFeedback onPress={handleAgeModal}>
            <View className={`flex flex-row shadow-sm shadow-slate-400 items-center mx-1 rounded-lg p-1 ${ageModalVisible ? 'bg-black' : 'bg-white'}`}>
              <Text className={`text-xl my-0.5 mx-2 ${ageModalVisible ? 'text-white' : 'text-black'}`}>Age</Text>
              <Ionicons
                name="chevron-down"
                size={28}
                style={{ color: ageModalVisible ? 'white' : 'black' }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View> 
      </View>
      {/* Filters active */}
      <View className="flex flex-row items-center">
        { filterAge && (
          <View className="flex flex-row shadow-sm shadow-slate-400 rounded-full items-center py-0.5 px-2 m-1 bg-white">
            <Text className="text-xl px-2">{filterAge}</Text>
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
                  trackColor={{ false: "#ffffff", true: "#000000" }}
                  thumbColor={{ true: "#ffffff", false: "#000000" }}
                  value={ageOneSwitch}
                  onValueChange={() => handleAgeSwitch('3-5')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">6 - 8</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#ffffff", true: "#000000" }}
                  thumbColor={{ true: "#ffffff", false: "#000000" }}
                  value={ageTwoSwitch}
                  onValueChange={() => handleAgeSwitch('6-8')}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full px-4 py-2">
                <Text className="text-lg font-bold">9-11</Text>
                <Switch
                  className="mx-4"
                  trackColor={{ false: "#ffffff", true: "#000000" }}
                  thumbColor={{ true: "#ffffff", false: "#000000" }}
                  value={ageThreeSwitch}
                  onValueChange={() => handleAgeSwitch('9-11')}
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