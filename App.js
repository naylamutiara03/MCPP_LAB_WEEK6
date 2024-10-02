import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Input from './Input';

export default function App() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');

  const handleNameChange = (value) => setName(value);
  const handleNimChange = (value) => setNim(value);

  return (
    <View style={styles.container}>
      <Text>{name} - {nim}</Text>
      <Input 
        label="Name" 
        placeholder="Input your name" 
        value={name} 
        onChangeText={handleNameChange} 
      />
      <Input 
        label="NIM" 
        placeholder="Input your NIM" 
        value={nim} 
        onChangeText={handleNimChange} 
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
