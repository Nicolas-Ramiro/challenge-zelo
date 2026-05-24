import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  address: string;
  petName: string;
  petBreed: string;
  profileImage?: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Challenge Zelo</Text>
      <StatusBar style="auto" />
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
