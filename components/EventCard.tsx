import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export const EventCard = () => {
  const image: any = require('../assets/event_bg.jpg');

  return (
    <>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={tw.style(
          'mt-3',
          'flex-row',
          'justify-between',
          'w-85',
          'h-106',
          'rounded-xl',
          'flex',
          'flex-col',
          'px-2',
          'py-2',
          'mr-5'
        )}
        borderRadius={16}
      >
        <Pressable
          style={tw.style('w-30', 'h-30')}
          onPress={() => {
            console.log('clicked event');
          }}
        >
          <View
            style={tw.style(
              'w-27',
              'h-27',
              'bg-[#FAFAFC]',
              'rounded-xl',
              'flex',
              'justify-center',
              'items-center'
            )}
          >
            <Text style={tw.style('font-bold', 'text-xl')}>8 KM</Text>
          </View>
        </Pressable>
        <View
          style={tw.style(
            'bg-[#FAFAFC]',
            'min-h-30',
            'max-h-45',
            'rounded-xl',
            'w-full',
            'px-5',
            'py-5'
          )}
        >
          <View style={tw.style('flex', 'flex-row', 'justify-between')}>
            <Text style={tw.style('text-sm')}>Festival</Text>
            <Text style={tw.style('text-sm', 'text-[#FB7750]', 'font-bold')}>
              €199.99
            </Text>
          </View>
          <Text style={tw.style('text-xl', 'mt-2')}>Dranouter Festival</Text>
          <Text style={tw.style('text-base', 'leading-5', 'mt-1')}>
            A family minded festival with great artists from over the world.
          </Text>
          <View style={tw.style('flex', 'flex-row', 'mt-3', 'justify-between')}>
            <Button title="View Event" />
            <Button title="Get Tickets" />
          </View>
        </View>
      </ImageBackground>
      <View
        style={tw.style(
          'w-13',
          'h-13',
          'bg-red-500',
          'z-0',
          'absolute',
          'rounded-full',
          'hidden'
        )}
      ></View>
    </>
  );
};
