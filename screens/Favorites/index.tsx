import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'twrnc';

const Settings = () => {
  return (
    <SafeAreaView style={tw.style('pl-3', 'pr-3')}>
      <Text style={tw.style('text-lg', 'font-bold')}>Favorites</Text>
    </SafeAreaView>
  );
};

export default Settings;
