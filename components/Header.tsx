import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import tw from 'twrnc';

const goToNotifications = () => {
  console.log('Go to notifications');
};

export const Header = () => {
  return (
    <View
      style={tw.style(
        'flex',
        'flex-row',
        'justify-between',
        'pt-6',
        'items-center'
      )}
    >
      <View>
        <Text style={tw.style('text-xl')}>Hello 👋</Text>
        <Text style={tw.style('text-2xl', 'font-bold')}>John Doe</Text>
      </View>
      <TouchableOpacity onPress={goToNotifications}>
        <Ionicons name="notifications-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};
