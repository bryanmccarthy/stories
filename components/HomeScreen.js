import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="">
      <Text>Home</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;