import { ScrollView } from 'react-native';
import StoriesRow from './StoriesRow';
import GenreLabel from './GenreLabel';

const genres = ['Fiction', 'Mystery', 'Fantasy', 'Fairytale', 'Sci-fi'];

function Stories({ stories, navigation, handleShowModal }) {
  return (
    <ScrollView>
      {genres.map(genre => (
        <>
        <GenreLabel key={genre} genre={genre} />
        <StoriesRow 
          key={genre} 
          stories={stories} 
          navigation={navigation} 
          handleShowModal={handleShowModal} 
          genre={genre} />
        </>
      ))}
    </ScrollView>
  );
}

export default Stories;