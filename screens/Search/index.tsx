import { useState } from 'react';
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

const Settings = () => {
  const [search, setSearch]: [string, (search: string) => void] = useState('');

  const renderNotes = ({ item }: { item: EventSM }) => {
    const n: EventSM = {
      id: item.id,
      category: item.category,
      title: item.title,
      price: item.price,
      content: item.content,
    };

    if (search && n.title.toLowerCase().includes(search.toLowerCase())) {
      return <SuggestedEvents note={item} key={item.title} />;
    }
  };

  const searchHandler = (searchInput: any) => {
    setSearch(searchInput);
  };

  return (
    <SafeAreaView style={tw.style('pl-5', 'pr-5', 'bg-[#D3FF53]', 'h-full')}>
      <Header />
      <SearchBar onInput={searchHandler} />
      {(() => {
        if (search) {
          //Here needs the full array of events to come
          return (
            <>
              <Text style={tw.style('text-2xl', 'font-bold', 'pb-3')}>
                Searches
              </Text>
              <FlatList
                data={notes}
                renderItem={renderNotes}
                ListHeaderComponent={<SuggestedEvents />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </>
          );
        }
        //Here needs the suggesteds to come
        console.log('nothing');
        return (
          <Text style={tw.style('text-2xl', 'font-bold', 'pb-3')}>
            Suggested Events
          </Text>
        );
      })()}
    </SafeAreaView>
  );
};

export default Settings;
