import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { User } from '../App';

interface RegisterScreenProps {
  onRegister: (user: User) => void;
}

export default function RegisterScreen({ onRegister }: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    cpf: '',
    address: '',
    petName: '',
    petBreed: '',
  });

  const handleRegister = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.cpf ||
      !formData.address ||
      !formData.petName ||
      !formData.petBreed
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const userData: User = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      cpf: formData.cpf,
      address: formData.address,
      petName: formData.petName,
      petBreed: formData.petBreed,
    };

    onRegister(userData);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🐾</Text>
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtitle}>Cadastre seus dados para continuar</Text>
      </View>

      {/* Dados Pessoais */}
      <Text style={styles.sectionTitle}>Dados Pessoais</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={formData.name}
        onChangeText={(value) => updateField('name', value)}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="seu.email@example.com"
        value={formData.email}
        onChangeText={(value) => updateField('email', value)}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        value={formData.password}
        onChangeText={(value) => updateField('password', value)}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="(11) 98765-4321"
        value={formData.phone}
        onChangeText={(value) => updateField('phone', value)}
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="123.456.789-00"
        value={formData.cpf}
        onChangeText={(value) => updateField('cpf', value)}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        placeholder="Rua, número, complemento"
        value={formData.address}
        onChangeText={(value) => updateField('address', value)}
        placeholderTextColor="#999"
      />

      {/* Dados do Pet */}
      <Text style={styles.sectionTitle}>Dados do Pet</Text>

      <Text style={styles.label}>Nome do Pet</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do seu pet"
        value={formData.petName}
        onChangeText={(value) => updateField('petName', value)}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Raça</Text>
      <TextInput
        style={styles.input}
        placeholder="Raça do pet"
        value={formData.petBreed}
        onChangeText={(value) => updateField('petBreed', value)}
        placeholderTextColor="#999"
      />

      {/* Botão Cadastrar */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Criar Conta</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    fontSize: 40,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 24,
    marginBottom: 16,
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
  registerButton: {
    backgroundColor: '#001f3f',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacer: {
    height: 40,
  },
});
