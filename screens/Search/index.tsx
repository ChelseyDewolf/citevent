import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'twrnc';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { SuggestedEvents } from '../../components/SuggestedEvents';
import EventSM from '../../interfaces/EventSM';

const notes: any = [
  {
    category: 'Festival',
    title: 'Dranouter',
    price: '199.99',
    content: 'A family minded festival with great artists from over the world.',
  },
  {
    category: 'Festival',
    title: 'Dranouter',
    price: '199.99',
    content: 'A family minded festival with great artists from over the world.',
  },
  {
    category: 'Festival',
    title: 'Dranouter',
    price: '199.99',
    content: 'A family minded festival with great artists from over the world.',
  },
  {
    category: 'Festival',
    title: 'Dranouter',
    price: '199.99',
    content: 'A family minded festival with great artists from over the world.',
  },
  {
    category: 'Festival',
    title: 'Dranouter',
    price: '199.99',
    content: 'A family minded festival with great artists from over the world.',
  },
];

const renderNotes = ({ item }: { item: EventSM }) => {
  const n: EventSM = {
    id: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    content: item.content,
  };

  return <SuggestedEvents note={item} key={item.title} />;
};

const Settings = () => {
  return (
    <SafeAreaView style={tw.style('pl-5', 'pr-5', 'bg-[#D3FF53]', 'h-full')}>
      <Header />
      <SearchBar />
      <Text style={tw.style('text-2xl', 'font-bold', 'pb-3')}>
        Suggested Events
      </Text>
      <FlatList
        data={notes}
        renderItem={renderNotes}
        ListHeaderComponent={<SuggestedEvents />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Settings;
