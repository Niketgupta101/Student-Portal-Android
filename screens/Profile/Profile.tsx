import React, { useState } from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet, View,
} from 'react-native';
import { MD3Colors, Text, TextInput } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Account from './Account';
import Accordion from '../../utils/Accordion';

import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
import { Button } from '@react-native-material/core';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const profile = {
  Name: 'Gupta Niket',
  Admission_Number: '19JE0340',
  Course: 'Bachelor of Technology',
  Passout_Year: '2023',
  Dob: '10th Jan 2002',
  Gender: 'Male',
  Category: 'General',
  Contact_Number: '7600420703',
  Email: '19je0340@mech.iitism.ac.in',
  Personal_Email: 'niketgupta101@gmail.com',
  Permanent_Address: 'B/32 Mansi Apartment, Near Old Seventh Day School, Maninagar East, Ahmedabad, Gujarat, India, Pincode : 380008',
  Current_Address: 'B/32 Mansi Apartment, Near Old Seventh Day School, Maninagar East, Ahmedabad, Gujarat, India, Pincode : 380008',
  Father_Name: 'Devendranath Gupta',
  Aadhar_No: '725972550317',
  Are_you_EWS_General: 'No',
  Are_you_PWD: 'No',
  Degree_of_disability: '0',
  Branch: 'Mechanical Engineering',
  Current_Semester: '7th',
  Current_CGPA: '8.34',
  Gradesheet: undefined,
  Secondary_Education: {
    Board: 'ICSE',
    School: 'Seventh Day Adventist Higher Secondary School',
    Stream: 'Science',
    Year_of_Study: '2018-2019',
    Equivalent_Percentage: '92.4%',
    Gradesheet: 'ab'
  }

}

const RenderEducation = ({ title, data }: { title: string, data: any }) => {

  const [Expanded, setExpanded] = useState(false);

  const [editing, setEditing] = React.useState(true);

  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >()

  React.useEffect(() => {
    console.log(JSON.stringify(result, null, 2))
  }, [result])

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err;
    }
  }

  const RenderField = ({ field }: { field: any }) => {
    return <View
      key={field}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 6,
        paddingHorizontal: 10
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '700', width: '100%' }}>
        {field.split('_').join(' ')}
      </Text>
      <TextInput
        style={{ fontSize: 16, fontWeight: '600', height: 40, width: '100%' }}
        value={data[field]}
        disabled={!editing}
      />
    </View>
  }

  const RenderGradesheet = () => {
    return data.Gradesheet ? (
      <Button
        key={'Gradesheet'}
        variant='outlined'
        title="Download Gradesheet"
        titleStyle={{ color: '#005fdd' }}
        onPress={() => {
          Linking.openURL(data.Gradesheet);
        }}
        leading={() => <Entypo name={'download'} size={20} color={'#005fdd'} />}
        style={{ width: 250, alignSelf: 'center', borderColor: `#005fdd`, borderWidth: 1, marginVertical: 20 }}
      />
    ) : (
      <Button
        key={'Gradesheet'}
        title="Upload Gradesheet"
        onPress={() => {
          DocumentPicker.pick({
            type: types.pdf,
          })
            .then(setResult)
            .catch(handleError)
        }}
        leading={() => <Entypo name={'upload'} size={20} color='white' />}
        style={{ width: 250, alignSelf: 'center', backgroundColor: '#005fdd', borderColor: `#005fdd`, borderWidth: 1, marginVertical: 20 }}
      />
    )
  }

  return (
    <SafeAreaView>
      <View style={{
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
          <MaterialCommunityIcons onPress={() => setExpanded(!Expanded)} name={'playlist-check'} size={30} style={{ marginRight: 7, color: `${Expanded ?'#005fdd' : 'black'}` }} />
          <Text onPress={() => setExpanded(!Expanded)} variant='titleLarge' style={{
            fontSize: 18,
            fontWeight: '800',
            color: `${Expanded ?'#005fdd' : 'black'}`,
            width: '80%',
            height: '100%'
          }} >
            {title}
          </Text>
        </View>
        <Entypo onPress={() => setExpanded(!Expanded)} name={Expanded ? 'chevron-up' : 'chevron-down'} color={Expanded ?'#005fdd' : 'black'} size={22} style={{ marginRight: 7 }} />
      </View>
      <View style={{ display: `${Expanded ? 'flex' : 'none'}` }}>
        {Object.keys(data).map((field: string) => (
          field === 'Gradesheet' ? <RenderGradesheet /> : <RenderField field={field} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const Profile = () => {

  const {
    Name,
    Admission_Number,
    Course,
    Passout_Year,
    Dob,
    Gender,
    Category,
    Contact_Number,
    Email,
    Personal_Email,
    Permanent_Address,
    Current_Address,
    Father_Name,
    Aadhar_No,
    Are_you_EWS_General,
    Are_you_PWD,
    Degree_of_disability,
    Branch,
    Current_Semester,
    Current_CGPA,
    Gradesheet,
    Secondary_Education,
  } = profile;

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
          <Text variant="bodyMedium" style={{ textAlign: 'center' }}>{Course}</Text>
          <Text variant="bodyMedium" style={{ textAlign: 'center' }}>{Passout_Year} Passout Batch</Text>
        </View>
      </View>
      <Accordion title={'About'} icon={'playlist-check'} data={{ Dob, Gender, Category }} />
      <Accordion title={'Contact Details'} icon={'playlist-check'} data={{ Contact_Number, Email, Personal_Email }} />
      <Accordion title={'Address'} icon={'playlist-check'} data={{ Permanent_Address, Current_Address }} />
      <Accordion title={'Additional Questions'} icon={'playlist-check'} data={{ Father_Name, Aadhar_No, Are_you_EWS_General, Are_you_PWD, Degree_of_disability }} />
      <RenderEducation title={'Current Education'} data={{ Course, Branch, Current_Semester, Current_CGPA, Gradesheet }} />
      <RenderEducation title={'Class 12th Education'} data={{ ...Secondary_Education }} />
    </ScrollView>
  )
}

const ProfileNavigator = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default ProfileNavigator;
