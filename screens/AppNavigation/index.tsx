import {
  BottomTabHeaderProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import Favorites from '../Favorites';
import Home from '../Home';
import Map from '../Map';
import Search from '../Search';
import Settings from '../Settings';

import { ParamListBase, RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase>;
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    if (route.name === 'Home')
      return <Ionicons color={color} name="home" size={size} />;

    if (route.name === 'Search')
      return <Ionicons color={color} name="search" size={size} />;

    if (route.name === 'Map')
      return <Ionicons color={color} name="map" size={size} />;

    if (route.name === 'Favorites')
      return <Ionicons color={color} name="heart" size={size} />;

    if (route.name === 'Settings')
      return <Ionicons color={color} name="md-settings" size={size} />;
  },

  tabBarActiveTintColor: '#FB7750',

  headerShown: false,

  // header: (props: BottomTabHeaderProps) => {
  //   console.log(props);
  //   const title: string = props.route.name;
  //   const { params } = props.route;
  //   return (
  //     <NavigationHeader title={title} params={params} />
  //   );
  // },
});

export default () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
