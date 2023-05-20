import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, ScrollView, Text, View } from 'react-native';

function StoriesRow({ stories, navigation, handleShowModal, genre }) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          story.genre === genre && (
            <View key={story.id} className="flex flex-row relative shadow-md shadow-slate-400 w-36 h-48 m-4 mb-8">
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
          )
        ))}
      </ScrollView>
  );
}

export default StoriesRow;