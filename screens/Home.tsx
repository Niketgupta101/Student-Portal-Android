import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Jobs from './Jobs';
import Notification from './Notification';
import Feeds from './Feeds/Feeds';
import Profile from './Profile/Profile';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Feeds"
        component={Feeds}
        options={{
          tabBarLabel: 'Feeds',
          tabBarColor: 'blue',
          tabBarIcon: ({ color }) => (
            <View>
              <AntDesign style={[{ color }]} size={25} name={'home'} />
            </View>),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ color }) => (
            <View>
              <AntDesign style={[{ color }]} size={25} name={'book'} />
            </View>),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <View>
              <AntDesign style={[{ color }]} size={25} name={'bells'} />
            </View>),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="person-circle-outline" size={26} />
            </View>
          ),
          tabBarColor: 'black'

        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default Home;
