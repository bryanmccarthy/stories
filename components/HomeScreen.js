import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
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

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex flex-row justify-between items-center px-2 py-1">
        <Text className="text-xl">Stories</Text>
        <Ionicons name="person-circle-outline" size={32} color="black" />
      </View>
      {/* Stories */}
      <ScrollView contentContainerStyle={styles.wrapper}>
        {stories.map(story => (
          <View key={story.id} className="border-solid border-2 rounded-lg w-44 h-44 m-2">
            <Text className="text-slate-800 text-sm">{story.name}</Text>
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