import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, Modal, ScrollView, Text, View } from 'react-native';

function Stories({ stories, navigation, handleShowModal }) {
  return (
    <ScrollView contentContainerStyle={styles.wrapper} horizontal={true}>
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
  );
}

// Styles for ScrollView
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 120,
  },
};

export default Stories;