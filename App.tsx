import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = (email: string, password: string) => {
    setUser({ name: 'Usuário', email, password, phone: '', cpf: '', address: '', petName: '', petBreed: '' });
    setCurrentScreen('home');
  };
  const handleRegister = (userData: User) => { setUser(userData); setCurrentScreen('home'); };
  const handleGoToRegister = () => { setCurrentScreen('register'); };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login': return <LoginScreen onLogin={handleLogin} onGoToRegister={handleGoToRegister} />;
      case 'register': return <RegisterScreen onRegister={handleRegister} />;
      case 'home': return <HomeScreen onNavigate={setCurrentScreen} user={user} isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />;
      default: return <LoginScreen onLogin={handleLogin} onGoToRegister={handleGoToRegister} />;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#0F172A' : '#fff' }]}>
      {renderScreen()}
      <StatusBar style={isDarkMode ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
