import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch } from 'react-native';

export default function App() {

  const [estado, setEstado] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Switch
        style={styles.stSwtch}
        trackColor={{false: 'gray', true: 'white'}}
        thumbColor={estado ? 'red' : 'gray'}
        value={estado}
        onValueChange={setEstado}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stSwtch:{
    width: '12%',
    height: '20%'
  }
});
