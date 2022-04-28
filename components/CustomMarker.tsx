import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import tw from 'twrnc';

export const CustomMarker = ({ childToParent }) => {
  return (
    <TouchableOpacity onPress={() => childToParent()}>
      <Ionicons name="skull" size={30} />
    </TouchableOpacity>
  );
};
