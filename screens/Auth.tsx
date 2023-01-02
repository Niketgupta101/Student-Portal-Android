import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
} from 'react-native';
import { Card } from 'react-native-paper';

const Auth = ({ navigation }: { navigation: any }) => {

  const handleSubmit = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/images/Login1.png')}
        style={styles.body}
      >
        <View style={styles.auth_card}>
          <Image source={require('../assets/images/logo.png')} style={styles.college_logo} />
          <View><Text style={styles.auth_title}>AutoMeta</Text></View>

          <Card
            style={{
              width: '95%',
              padding: 0
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                color: 'grey',
                padding: 10,
                width: '100%',
                // borderBottomColor: '#005fdd',
                borderBottomColor: 'white',
                borderBottomWidth: 3,
                textAlign: 'center'
              }}
            >
              Login
            </Text>
            <Card.Content style={{ marginVertical: 10, width: '100%' }}>
              <TextInput placeholder='Username' style={styles.auth_input} />
              <TextInput placeholder='Password' style={styles.auth_input} secureTextEntry />
              <Pressable
                style={styles.auth_btn}
                onPress={handleSubmit}
              >
                <Text style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold'
                }}>Submit</Text>
              </Pressable>
            </Card.Content>
          </Card>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
  },
  auth_card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '92%',
    height: '50%',
    backgroundColor: 'transparent',
    display: 'flex',
  },
  college_logo: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  auth_title: {
    fontSize: 35,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20
  },
  auth_input: {
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    color: 'grey',
    marginVertical: 15,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    elevation: 3,
    borderRadius: 30,
    fontSize: 18,
  },
  auth_btn: {
    width: '100%',
    height: 50,
    padding: 3,
    marginTop: 15,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    elevation: 3
  }
});

export default Auth;
