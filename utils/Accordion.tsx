import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { List, Text, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Accordion = ({ title, icon, data }: { title: string, icon: string, data: any }) => {

  const [expanded, setExpanded] = React.useState(false);
  const [editing, setEditing] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title={title}
      left={props => <MaterialCommunityIcons {...props} name={icon} size={30} />}
      expanded={expanded}
      onPress={handlePress}
      titleStyle={{ fontSize: 18, fontWeight: '700' }}
    >
      {Object.keys(data).map((field: string) => (
        <View key={field} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 6, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', width: '100%' }}>{field.split('_').join(' ')}</Text>
          <TextInput
            style={{ fontSize: 16, fontWeight: '600', height: 40, width: '100%' }}
            value={data[field]}
            disabled={!editing}
          />
        </View>
      ))}
    </List.Accordion>
  );
};

const styles = StyleSheet.create({

});

export default Accordion;
