import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useState } from 'react';

export const SearchBar = (props: any) => {
  const [searchInput, setsearchInput] = useState<string | undefined>();

  const handleInputSearch = (searchInput: string) => {
    //setsearchInput(searchInput);
    props.onInput(searchInput);
  };
  return (
    <>
      <View style={tw.style('pt-5')}>
        {/* <Ionicons name="search" /> */}
        <TextInput
          style={tw.style('px-5', 'py-3', 'rounded-xl')}
          placeholder={'Search...'}
          backgroundColor="#EFEFF0"
          onChangeText={handleInputSearch}
          value={searchInput}
          // placeholderTextColor={'000000'}
        />
      </View>
      <View>
        <Text>{searchInput}</Text>
      </View>
    </>
  );
};
