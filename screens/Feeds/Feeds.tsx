import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet, View,
} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Divider, Searchbar, Text, TextInput } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LeftContent = (props: any) => <Avatar.Icon {...props} style={{ backgroundColor: '#005fdd' }} icon="account" />

const Data = [
  {
    id: '1',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    comments: [
      { id: '1',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '2',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '3',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '4',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '5',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '6',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '7',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
    ]
  },
  {
    id: '2',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam, quae nobis vero temporibus ad. Similique doloremque officia libero, modi quas cumque illo architecto alias cupiditate necessitatibus deserunt itaque consequatur accusamus! Ipsum fugit at quibusdam deserunt doloremque, repellendus illum quis in impedit nisi temporibus molestias ipsam, dolores pariatur debitis veritatis quaerat vel quae iure cum ad consequuntur! Pariatur, cupiditate itaque.',
    comments: [
      { id: '1',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '2',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '3',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '4',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '5',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '6',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '7',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
    ]
  },
  {
    id: '3',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam, quae nobis vero temporibus ad. Similique doloremque officia libero, modi quas cumque illo architecto alias cupiditate necessitatibus deserunt itaque consequatur accusamus! Ipsum fugit at quibusdam deserunt doloremque, repellendus illum quis in impedit nisi temporibus molestias ipsam, dolores pariatur debitis veritatis quaerat vel quae iure cum ad consequuntur! Pariatur, cupiditate itaque.',
    comments: [
      { id: '1',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '2',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '3',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '4',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '5',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '6',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
      { id: '7',username: 'Rakesh Jha', commentedAt: Date.now(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam,' },
    ]
  },
  {
    id: '4',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam, quae nobis vero temporibus ad. Similique doloremque officia libero, modi quas cumque illo architecto alias cupiditate necessitatibus deserunt itaque consequatur accusamus! Ipsum fugit at quibusdam deserunt doloremque, repellendus illum quis in impedit nisi temporibus molestias ipsam, dolores pariatur debitis veritatis quaerat vel quae iure cum ad consequuntur! Pariatur, cupiditate itaque.',
  },
  {
    id: '5',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam, quae nobis vero temporibus ad. Similique doloremque officia libero, modi quas cumque illo architecto alias cupiditate necessitatibus deserunt itaque consequatur accusamus! Ipsum fugit at quibusdam deserunt doloremque, repellendus illum quis in impedit nisi temporibus molestias ipsam, dolores pariatur debitis veritatis quaerat vel quae iure cum ad consequuntur! Pariatur, cupiditate itaque.',
  },
  {
    id: '6',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam, quae nobis vero temporibus ad. Similique doloremque officia libero, modi quas cumque illo architecto alias cupiditate necessitatibus deserunt itaque consequatur accusamus! Ipsum fugit at quibusdam deserunt doloremque, repellendus illum quis in impedit nisi temporibus molestias ipsam, dolores pariatur debitis veritatis quaerat vel quae iure cum ad consequuntur! Pariatur, cupiditate itaque.',
  },
  {
    id: '7',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam, quae nobis vero temporibus ad. Similique doloremque officia libero, modi quas cumque illo architecto alias cupiditate necessitatibus deserunt itaque consequatur accusamus! Ipsum fugit at quibusdam deserunt doloremque, repellendus illum quis in impedit nisi temporibus molestias ipsam, dolores pariatur debitis veritatis quaerat vel quae iure cum ad consequuntur! Pariatur, cupiditate itaque.',
  },
  {
    id: '8',
    title: 'Card Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi ipsa in placeat reprehenderit voluptatibus vel, maxime omnis mollitia suscipit officiis provident voluptas cum, doloribus laudantium sint? Aliquid, quos aliquam. Doloribus magnam illo provident autem nulla quod laborum culpa quaerat voluptate. Dolores eveniet commodi tenetur iste doloribus nisi, nostrum aliquam, quae nobis vero temporibus ad. Similique doloremque officia libero, modi quas cumque illo architecto alias cupiditate necessitatibus deserunt itaque consequatur accusamus! Ipsum fugit at quibusdam deserunt doloremque, repellendus illum quis in impedit nisi temporibus molestias ipsam, dolores pariatur debitis veritatis quaerat vel quae iure cum ad consequuntur! Pariatur, cupiditate itaque.',
  },
]

const Feeds = ({ navigation }: { navigation: any }) => {

  const handleOpenFeed = (feed: any) => {
    navigation.navigate('Feed', { feed });
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Card mode='contained' style={{ marginBottom: 5 }}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content style={{ marginBottom: 10 }}>
          <Title>{item.title}</Title>
          <Paragraph>
            {item?.desc?.length <= 90 ? item?.desc : (
              <>
                <Text>
                  {`${item?.desc?.substr(0, 90)}...  `}
                </Text>
                <Text onPress={() => handleOpenFeed(item)} style={{ color: 'blue' }}>View more</Text>
              </>
            )}
          </Paragraph>
        </Card.Content>
        <View style={{ display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between', paddingVertical: 4, paddingHorizontal: 10 }}>
          <Text onPress={() => handleOpenFeed(item)}>1.5K likes</Text>
          <Text onPress={() => handleOpenFeed(item)}>{item?.comments?.length || 0} comments</Text>
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
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{
          marginBottom: 60
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Feeds;
