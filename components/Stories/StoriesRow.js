import { ImageBackground, ScrollView, View, TouchableWithoutFeedback } from 'react-native';

function StoriesRow({ stories, navigation, handleShowModal, genre }) {
  return (
    <ScrollView className="flex" horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          story.genre === genre && (
            <TouchableWithoutFeedback key={story.id} onPress={() => handleShowModal(story)}>
              <View className="flex flex-row relative shadow-sm shadow-slate-400 w-36 h-48 m-4 mb-8">
                <ImageBackground source={story.cover} style={{ width: '100%', height: '100%' }} imageStyle={{ borderRadius: 8 }}>
                  {/* book cover */}
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )
        ))}
      </ScrollView>
  );
}

export default StoriesRow;