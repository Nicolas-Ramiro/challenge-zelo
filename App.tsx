import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

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
  const [currentScreen, setCurrentScreen] = useState('login');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, password: string) => {
    setUser({ name: 'Usuário', email, password, phone: '', cpf: '', address: '', petName: '', petBreed: '' });
  };
  const handleRegister = (userData: User) => { setUser(userData); setCurrentScreen('login'); };
  const handleGoToRegister = () => { setCurrentScreen('register'); };

  return (
    <View style={styles.container}>
      {currentScreen === 'login'
        ? <LoginScreen onLogin={handleLogin} onGoToRegister={handleGoToRegister} />
        : <RegisterScreen onRegister={handleRegister} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
