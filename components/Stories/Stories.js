import { ScrollView, View } from 'react-native';
import StoriesRow from './StoriesRow';
import GenreLabel from './GenreLabel';

const genres = ['Fiction', 'Mystery', 'Fantasy', 'Sci-fi'];

function Stories({ stories, navigation, handleShowModal }) {
  return (
    <ScrollView>
      {genres.map(genre => (
        <View key={genre}>
          <GenreLabel genre={genre} />
          <StoriesRow 
            stories={stories} 
            navigation={navigation} 
            handleShowModal={handleShowModal} 
            genre={genre} 
          />
        </View>
      ))}
    </ScrollView>
  );
}

export default Stories;