import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { CustomMarker } from '../../components/CustomMarker';

import MapView, { Marker } from 'react-native-maps';

import uuid from 'react-native-uuid';
import tw from 'twrnc';
import * as Location from 'expo-location';

const Settings = () => {
  const mapRef = useRef(null);

  let cord = '';

  const [data, setData] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 50.82469601099183,
    longitude: 3.250216015205323,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

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

  const test = (cord: any) => {
    if (cord === '') {
      //
    } else {
      mapRef.current.animateToRegion(cord, 2 * 1000);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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
            <Marker
              title={marker.title}
              description={marker.title}
              coordinate={marker.coordinates}
            >
              <CustomMarker />
            </Marker>
          </TouchableOpacity>
        ))}
        <Marker coordinate={currentLocation}>
          <CustomMarker />
        </Marker>
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
