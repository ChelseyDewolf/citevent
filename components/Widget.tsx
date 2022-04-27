import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import tw from 'twrnc';
import EventSM from '../interfaces/EventSM';
import { useEffect, useState } from 'react';

export const Widget = () => {
  return (
    <>
      <View
        style={tw.style(
          'bg-[#FAFAFC]',
          'px-5',
          'py-5',
          'rounded-xl',
          'mt-3',
          'flex-row',
          'justify-between',
          'items-center'
        )}
      >
        <View>
          <View style={tw.style('flex')}>
            <Text style={tw.style('text-xl', 'font-bold')}>Kortrijk</Text>
            <Text style={tw.style('text-sm')}>Monday 21 Mar 12:30</Text>
          </View>
          <Text
            style={tw.style('text-3xl', 'text-[#FB7750]', 'mt-2', 'font-bold')}
          >
            18°C
          </Text>
          <Text style={tw.style('text-sm', 'leading-5')}>Sunny day</Text>
        </View>
        <View>
          <Image
            style={{ width: 72, height: 72 }}
            source={require('../assets/sunny.png')}
            resizeMode={'cover'}
          />
        </View>
      </View>
    </>
  );
};
