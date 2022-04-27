import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'twrnc';
import { EventCard } from '../../components/EventCard';
import { Header } from '../../components/Header';
import { Widget } from '../../components/Widget';

const Home = () => {
  return (
    <SafeAreaView style={tw.style('pl-5', 'pr-5', 'bg-[#D3FF53]', 'h-full')}>
      <ScrollView style={tw.style('pt-3', 'h-100')}>
        <Header />
        <Widget />
        <Text style={tw.style('text-2xl', 'font-bold', 'pb-3', 'pt-3')}>
          Popular events
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={357} //your element width
          snapToAlignment={'start'}
        >
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
