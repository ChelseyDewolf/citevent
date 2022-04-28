import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'twrnc';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { CustomMarker } from '../../components/CustomMarker';
import uuid from 'react-native-uuid';

import { useRef, useState } from 'react';

const Settings = () => {
  const mapRef = useRef(null);

  let cord = '';

  const [data, setData] = useState('');

  const [region, setRegion] = useState({
    latitude: 50.819478,
    longitude: 3.257726,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const pauteFarty = {
    latitude: 50.82617218243292,
    longitude: 3.2246552854948565,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const allMarkers = {
    markers: [
      {
        id: uuid.v4(),
        title: 'Paute Farty',
        coordinates: {
          latitude: 50.82617218243292,
          longitude: 3.2246552854948565,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
      },
      {
        id: uuid.v4(),
        title: "T'Arsenaal x De Plekke",
        coordinates: {
          latitude: 50.80738469661718,
          longitude: 3.2304208124791436,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
      },
    ],
  };

  const childToParent = (childdata) => {
    setData(childdata);
    console.log(data);
    mapRef.current.animateToRegion(pauteFarty, 2 * 1000);
  };

  const test = (cord) => {
    if (cord === '') {
      //
    } else {
      mapRef.current.animateToRegion(cord, 2 * 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 50.819478,
          longitude: 3.257726,
          latitudeDelta: 0.075,
          longitudeDelta: 0.075,
        }}
      >
        {allMarkers.markers.map((marker) => (
          <TouchableOpacity
            onPress={() => test(marker.coordinates)}
            key={marker.id}
          >
            <Marker coordinate={marker.coordinates}>
              <CustomMarker />
            </Marker>
          </TouchableOpacity>
        ))}

        {/* image={require('../../assets/sunny.png')} */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Settings;

// onRegionChangeComplete={(region) => setRegion(region)}
