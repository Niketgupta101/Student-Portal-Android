import React from 'react';
import {
  StyleSheet, View, SafeAreaView, ScrollView
} from 'react-native';
import { Avatar, Card, MD3Colors, Searchbar, Text } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RenderJob = () => {

  const [isOpen, setIsOpen] = React.useState(true);
  const [eligible, setEligible] = React.useState(true);
  const [applied, setApplied] = React.useState(false);

  const jobFlag = (content: string, color: string, icon: string) => {
    return (
      <View
        style={{
          borderTopWidth: 1.5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: `${eligible ? 'green':'red'}`,
          paddingHorizontal: 10,
          paddingVertical: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#edece8'
        }}
      >
        <Text
          variant='titleMedium'
          style={{
            color,
          }}
        ><FontAwesome name={icon} color={color} size={20}/> {content}</Text>
        {isOpen && <Text variant='titleMedium' style={{ color: 'red', alignItems: 'center' }} ><Ionicons name='timer-sharp' color={'red'} size={20} /> 31st Dec, 2022</Text>}
      </View>
    );
  }

  return (
    <Card mode='outlined' style={{
      borderBottomWidth: 1.5,
      borderLeftWidth: 1.5,
      borderRightWidth: 1.5,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderColor: `${eligible ? 'green':'red'}`,
      marginBottom: 10,
      marginHorizontal: 5
    }}>
      {isOpen ? (
        applied ? (
          jobFlag('Applied', 'green', 'check-square-o')
        ) : (
          jobFlag('Application Open', 'green', 'unlock')
        )
      ) : (
        jobFlag('Application Closed', 'red', 'unlock')
      )}
      <Card.Content
        style={{
          marginBottom: 5,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 1.5,
          borderLeftWidth: 1.5,
          borderRightWidth: 1.5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: `${eligible ? 'green':'red'}`,
          paddingVertical: 10,
        }}
      >
        <Avatar.Icon size={55} icon="city" style={{ backgroundColor: '#005fdd' }} />
        <View
          style={{
            paddingHorizontal: 10
          }}
        >
          <Text variant='titleLarge' style={{ fontSize: 18 }}>Software Development Engineer</Text>
          <Text variant='titleSmall'><Entypo color={MD3Colors.tertiary10} name='briefcase' size={14} />   Goolge Inc.</Text>
          <Text variant='titleSmall'><Entypo color={MD3Colors.tertiary10} name='location' size={14} />   Bengalore, Karnataka</Text>
        </View>
      </Card.Content>
    </Card>
  )
}

const Jobs = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ marginBottom: 5, elevation: 5 }}
      />
      <ScrollView>
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
        <RenderJob />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Jobs;
