import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
  onGoToRegister: (email: string, password: string) => void;
}

export default function LoginScreen({ onLogin, onGoToRegister }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Erro', 'Email inválido');
      return;
    }

    // Verificar se é um dos médicos (emails pré-cadastrados)
    const doctors = ['zelo@gmail.com', 'medico@zelopet.com'];
    
    if (doctors.includes(email.toLowerCase())) {
      onLogin(email, password);
    } else {
      // Usuário não é médico, ir para cadastro
      onGoToRegister(email, password);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 50, height: 50, marginBottom: 16 }}
        />
        <Text style={styles.title}>ZeloPet</Text>
        <Text style={styles.subtitle}>Bem-vindo de volta</Text>
        <Text style={styles.description}>Acesso seguro ao portal clínico.</Text>

        {/* Formulário */}
        <View style={styles.form}>
          <Text style={styles.label}>E-mail Profissional</Text>
          <TextInput
            style={styles.input}
            placeholder="seu.email@zelopet.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Login */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Acessar Sistema</Text>
        </TouchableOpacity>

        {/* Dica */}
        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>💡 Dica para teste:</Text>
          <Text style={styles.tipText}>Email médico: zelo@gmail.com</Text>
          <Text style={styles.tipText}>Outro email: vai para cadastro</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  content: {
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
  },
  form: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  forgotButton: {
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#0a7ea4',
    fontSize: 12,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#001f3f',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipBox: {
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#0a7ea4',
    width: '100%',
  },
  tipTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0a7ea4',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 12,
    color: '#0a7ea4',
    marginBottom: 4,
  },
});
