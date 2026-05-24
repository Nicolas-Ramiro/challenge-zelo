import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import PetsScreen from './screens/PetsScreen';
import VitalsScreen from './screens/VitalsScreen';
import ProfileScreen from './screens/ProfileScreen';

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
    // Simulando login bem-sucedido
    setUser({
      name: 'Usuário',
      email,
      password,
      phone: '',
      cpf: '',
      address: '',
      petName: '',
      petBreed: '',
    });
    setCurrentScreen('home');
  };

  const handleRegister = (userData: User) => {
    setUser(userData);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('login');
  };

  const handleGoToRegister = (email: string, password: string) => {
    setCurrentScreen('register');
    // Passar email e senha para a tela de registro
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} onGoToRegister={handleGoToRegister} />;
      case 'register':
        return <RegisterScreen onRegister={handleRegister} />;
      case 'home':
        return (
          <HomeScreen
            onNavigate={setCurrentScreen}
            user={user}
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          />
        );
      case 'pets':
        return (
          <PetsScreen
            onNavigate={setCurrentScreen}
            user={user}
            isDarkMode={isDarkMode}
          />
        );
      case 'vitals':
        return (
          <VitalsScreen
            onNavigate={setCurrentScreen}
            isDarkMode={isDarkMode}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            onNavigate={setCurrentScreen}
            onLogout={handleLogout}
            user={user}
            setUser={setUser}
            isDarkMode={isDarkMode}
          />
        );
      default:
        return <LoginScreen onLogin={handleLogin} onGoToRegister={handleGoToRegister} />;
    }
  };

  const backgroundColor = isDarkMode ? '#0F172A' : '#fff';
  const textColor = isDarkMode ? '#ffffff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {renderScreen()}
      <StatusBar style={isDarkMode ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
