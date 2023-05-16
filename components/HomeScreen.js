import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
        <Text className="text-slate-800 text-lg">Stories</Text>
        <Ionicons name="person-outline" size={24} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;