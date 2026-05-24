import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';

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
  const handleLogin = (email: string, password: string) => {};
  const handleGoToRegister = (email: string, password: string) => {};

  return (
    <View style={styles.container}>
      <LoginScreen onLogin={handleLogin} onGoToRegister={handleGoToRegister} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
