import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = props => {
  const [state, setstate] = useState('start');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state}</Text>
      <View
        style={{
          backgroundColor: 'BCBCBC',
          elevation: 12,
          width: 200,
          height: 200,
          borderRadius: 20,
          shadowColor: '#5e5e5e',
          shadowOffset: {
            width: 5,
          },
          shadowOpacity: 0.8,
          shadowRadius: 5,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 30,
          }}
          source={{uri: 'https://picsum.photos/200'}}
        />
      </View>
      <TouchableOpacity
        onPress={() => setstate('NewText ...')}
        ons
        style={{
          width: 200,
          height: 60,
          backgroundColor: 'red',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <Text style={[styles.text, {color: '#fff'}]}>Click</Text>
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#000"
        placeholder="text . . ."
        style={styles.TextInput}
        value={state}
        onChangeText={text => {
          setstate(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#ff0000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  TextInput: {
    backgroundColor: '#e5e5',
    width: 200,
    borderRadius: 20,
    height: 60,
    paddingLeft: 10,
    fontSize: 20,
  },
});

export default App;
