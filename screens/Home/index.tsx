import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'twrnc';
import { Header } from '../../components/Header';

const Home = () => {
  return (
    <SafeAreaView style={tw.style('pl-5', 'pr-5', 'bg-[#D3FF53]', 'h-full')}>
      <Header />
    </SafeAreaView>
  );
};

export default Home;
