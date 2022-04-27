import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import tw from 'twrnc';
import EventSM from '../interfaces/EventSM';

export const SuggestedEvents = ({ note }: { note?: EventSM }) => {
  console.log(note);

  if (note === undefined) {
    console.log({ note });
    return <Text>Nothing found...</Text>;
  } else {
    return (
      <>
        <Pressable
          onPress={() => {
            console.log('clicked event');
          }}
        >
          <View
            style={tw.style(
              'bg-[#FAFAFC]',
              'px-5',
              'py-5',
              'rounded-xl',
              'mt-3'
            )}
          >
            <View style={tw.style('flex', 'flex-row', 'justify-between')}>
              <Text style={tw.style('text-sm')}>{note?.category}</Text>
              <Text style={tw.style('text-sm', 'text-[#FB7750]', 'font-bold')}>
                {note?.price}
              </Text>
            </View>
            <Text style={tw.style('text-xl', 'mt-2')}>{note?.title}</Text>
            <Text style={tw.style('text-base', 'leading-5', 'mt-1')}>
              {note?.content}
            </Text>
          </View>
        </Pressable>
      </>
    );
  }
};
