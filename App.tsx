import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Feed from './screens/Feeds/Feed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Searchbar, TextInput } from 'react-native-paper';

const Stack = createStackNavigator();

const App = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#005fdd',
            },
            // headerTintColor: '#ffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
              // textAlign: 'center'
            },
          }}
        >
          <Stack.Screen options={{ headerShown: false }} name="Auth" component={Auth} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'AutoMeta',
              headerRight: () => <AntDesign name={'filter'} size={20} color={'white'} style={{ marginRight: 20 }} />
            }}
          />
          <Stack.Screen options={{ headerShown: false }} name="Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({

});

export default App;


