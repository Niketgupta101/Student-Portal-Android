import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet, View,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const account = {
  Name: 'Gupta Niket',
  Admission_Number: '19JE0340',
  Course: 'B.Tech',
  Passout_Year: '2023',
  Contact_Number: '7600420703',
  Email: '19je0340@mech.iitism.ac.in',
  Password: 'Niket101'
}

const Account = () => {

  const {
    Name,
    Admission_Number,
    Course,
    Passout_Year,
    Contact_Number,
    Email,
    Password
  } = account
  const data: any = { Contact_Number, Email, Password };

  const [editing, setEditing] = React.useState(true);


  return (
    <ScrollView>
      <View
        style={{
          marginTop: 20,
          marginBottom: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            height: 180,
            width: 180,
            borderTopEndRadius: 90,
            borderBottomEndRadius: 90,
            borderTopLeftRadius: 90,
            borderBottomLeftRadius: 90,
            overflow: 'hidden'
          }}
        >
          <Image source={require('../../assets/images/DP.jpg')} style={{ height: '100%', width: '100%' }} />
        </View>
        <View
          style={{
            margin: 10
          }}
        >
          <Text variant="titleLarge" style={{ textAlign: 'center', fontWeight: '700', marginBottom: 5 }}>{Name}</Text>
          <Text variant="bodyMedium" style={{ textAlign: 'center' }}>{Admission_Number}</Text>
          <Text variant="bodyMedium" style={{ textAlign: 'center' }}>{Course}|{Passout_Year} Passout Batch</Text>
        </View>
      </View>
      {Object.keys(data).map((field: string) => (
        <View key={field} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 6, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', width: '100%' }}>{field.split('_').join(' ')}</Text>
          <TextInput
            style={{ fontSize: 16, fontWeight: '600', height: 40, width: '100%' }}
            value={data[field]}
            disabled={!editing}
            secureTextEntry={field === 'Password'}
          />
        </View>
      ))}
      <Button icon="logout" mode="outlined" textColor='red' onPress={() => console.log('Pressed')} style={{ width: 150, alignSelf: 'center', margin: 20, borderColor: 'red' }}>
        Logout
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

});

export default Account;
