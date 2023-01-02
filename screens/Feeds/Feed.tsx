import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton, MD3Colors, Text, TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
// import { TextInput } from "@react-native-material/core";
import { Icon } from '@react-native-material/core';

const LeftContent = (props: any) => <Avatar.Icon {...props} style={{ backgroundColor: '#005fdd' }} icon="account" />

const Feed = ({ route }: { route: any }) => {

  const renderFeed = ({ item }: { item: any }) => {
    return (
      <Card mode='contained' style={{ marginBottom: 10 }}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content style={{ marginBottom: 10 }}>
          <Title>{item.title}</Title>
          <Paragraph>
            {item?.desc}
          </Paragraph>
        </Card.Content>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4, paddingHorizontal: 10 }}>
          <Text>1.5K likes</Text>
          <Text>{item?.comments?.length || 0} comments</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button><FontAwesome color={'#005fdd'} size={20} name={'comment-o'} /></Button>
          <Button><AntDesign color={'#005fdd'} size={20} name={'like2'} /></Button>
          <Button><AntDesign color={'#005fdd'} size={20} name={'dislike2'} /></Button>
          <Button><AntDesign color={'#005fdd'} size={20} name={'sharealt'} /></Button>
        </View>
      </Card>
    );
  }

  const renderComment = ({ item }: { item: any }) => {
    return (
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Avatar.Icon icon="account" size={40} style={{ margin: 10, backgroundColor: '#005fdd' }} />
        <Card style={{ width: '82%', marginBottom: 10 }}>
          <Card.Title title={item?.username} subtitle={moment(item.commentedAt).format('YYYY/MM/D hh:mm:ss')} />
          <Card.Content style={{ marginBottom: 10 }}>
            <Paragraph>
              {item.comment}
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }

  let Data = route.params?.feed?.comments || [];

  return (
    <SafeAreaView>
      <ScrollView style={{ height: '91.5%'}}>
      {renderFeed({ item: route.params?.feed })}
      <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 5, marginBottom: 10, marginHorizontal: 10 }}>Comments</Text>
      {/* <FlatList
        data={Data}
        renderItem={renderComment}
        keyExtractor={item => item.id}
      /> */}
      {Data.map(((item: any) => <View key={item.id}>{renderComment({item})}</View>))}
      </ScrollView>
      <View 
        style={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          height: '8.5%',
        }}
      >
        <TextInput
          placeholder='Leave your thoughts here...' 
          style={{ 
            width: '85%',
            height: 50,
            borderColor: 'white',
            borderTopWidth: 1,
            borderRadius: 25,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25
          }}
        />
        <Pressable 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 4,
            paddingLeft: 10,
            height: 50,
            width: '13%',
            borderRadius: 25,
            backgroundColor: `#005fdd`
          }}
        >
          <Ionicons name={'md-send-sharp'} size={30} color={'white'} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Feed;
