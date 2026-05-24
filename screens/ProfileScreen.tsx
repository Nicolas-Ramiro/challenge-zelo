import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from 'react-native';

import { createCommonStyles } from '../styles/commonStyles';
import { User } from '../App';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  user: User | null;
  setUser: (user: User) => void;
  isDarkMode: boolean;
}

export default function ProfileScreen({
  onNavigate,
  onLogout,
  user,
  setUser,
  isDarkMode,
}: ProfileScreenProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(user);
  const commonStyles = createCommonStyles(isDarkMode);
  const { colors } = commonStyles;
  const { bgColor, textColor, secondaryColor, cardBg, borderColor, accentColor } = colors;

  const handleSaveChanges = () => {
    if (editedUser) {
      setUser(editedUser);
      setIsEditing(false);
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
    }
  };

  const updateField = (field: string, value: string) => {
    if (editedUser) {
      setEditedUser({
        ...editedUser,
        [field]: value,
      });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView style={styles.scrollView}>
        {/* Logo */}
        <View style={styles.logoSection}>
          <Image
            source={require('../assets/icon.png')}
            style={{ width: 50, height: 50, marginBottom: 8 }}
          />
          <Text style={[styles.logoText, { color: textColor }]}>Zelo Pet</Text>
        </View>

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={[styles.title, { color: textColor }]}>Perfil do Tutor</Text>
          <Text style={[styles.subtitle, { color: secondaryColor }]}>
            Gerencie suas informações.
          </Text>
        </View>

        {/* Profile Card */}
        <View style={[styles.profileCard, { backgroundColor: accentColor + '20', borderColor: accentColor }]}>
          <View style={[styles.profileAvatar, { backgroundColor: accentColor }]}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
          <Text style={[styles.profileName, { color: textColor }]}>{editedUser?.name || 'Usuário'}</Text>
          <Text style={[styles.profileEmail, { color: secondaryColor }]}>{editedUser?.email || ''}</Text>
        </View>

        {/* Edit Button */}
        <View style={styles.editButtonContainer}>
          {!isEditing ? (
            <TouchableOpacity
              style={[styles.editButton, { backgroundColor: accentColor }]}
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.editButtonText}>✏️ Editar Dados</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.editActions}>
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: accentColor }]}
                onPress={handleSaveChanges}
              >
                <Text style={styles.actionButtonText}>✓ Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: '#999' }]}
                onPress={() => {
                  setEditedUser(user);
                  setIsEditing(false);
                }}
              >
                <Text style={styles.actionButtonText}>✕ Cancelar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Personal Data */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Dados Pessoais</Text>

          {isEditing ? (
            <>
              <Text style={[styles.label, { color: textColor }]}>Nome</Text>
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor, color: textColor }]}
                value={editedUser?.name || ''}
                onChangeText={(value) => updateField('name', value)}
                placeholderTextColor={secondaryColor}
              />

              <Text style={[styles.label, { color: textColor }]}>Email</Text>
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor, color: textColor }]}
                value={editedUser?.email || ''}
                onChangeText={(value) => updateField('email', value)}
                placeholderTextColor={secondaryColor}
              />

              <Text style={[styles.label, { color: textColor }]}>Telefone</Text>
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor, color: textColor }]}
                value={editedUser?.phone || ''}
                onChangeText={(value) => updateField('phone', value)}
                placeholderTextColor={secondaryColor}
              />

              <Text style={[styles.label, { color: textColor }]}>CPF</Text>
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor, color: textColor }]}
                value={editedUser?.cpf || ''}
                onChangeText={(value) => updateField('cpf', value)}
                placeholderTextColor={secondaryColor}
              />

              <Text style={[styles.label, { color: textColor }]}>Endereço</Text>
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor, color: textColor }]}
                value={editedUser?.address || ''}
                onChangeText={(value) => updateField('address', value)}
                placeholderTextColor={secondaryColor}
              />
            </>
          ) : (
            <>
              <View style={[styles.dataCard, { backgroundColor: cardBg, borderColor }]}>
                <Text style={styles.dataIcon}>🆔</Text>
                <View style={styles.dataContent}>
                  <Text style={[styles.dataLabel, { color: secondaryColor }]}>CPF</Text>
                  <Text style={[styles.dataValue, { color: textColor }]}>{editedUser?.cpf || 'N/A'}</Text>
                </View>
              </View>

              <View style={[styles.dataCard, { backgroundColor: cardBg, borderColor }]}>
                <Text style={styles.dataIcon}>📱</Text>
                <View style={styles.dataContent}>
                  <Text style={[styles.dataLabel, { color: secondaryColor }]}>TELEFONE</Text>
                  <Text style={[styles.dataValue, { color: textColor }]}>{editedUser?.phone || 'N/A'}</Text>
                </View>
              </View>
            </>
          )}
        </View>

        {/* Address */}
        {!isEditing && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: textColor }]}>Endereço</Text>

            <View style={[styles.dataCard, { backgroundColor: cardBg, borderColor }]}>
              <Text style={styles.dataIcon}>📍</Text>
              <View style={styles.dataContent}>
                <Text style={[styles.dataValue, { color: textColor }]}>{editedUser?.address || 'N/A'}</Text>
              </View>
            </View>
          </View>
        )}

        {/* Pet Info */}
        {!isEditing && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: textColor }]}>Pet Vinculado</Text>

            <View style={[styles.petCard, { backgroundColor: cardBg, borderColor }]}>
              <Text style={styles.petEmoji}>🐕</Text>
              <Text style={[styles.petName, { color: textColor }]}>{editedUser?.petName || 'N/A'}</Text>
              <Text style={[styles.petBreed, { color: secondaryColor }]}>{editedUser?.petBreed || 'N/A'}</Text>
            </View>
          </View>
        )}

        {/* Logout Button */}
        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: '#ffebee', borderColor: '#ffcdd2' }]}
          onPress={onLogout}
        >
          <Text style={styles.logoutButtonText}>🚪 Sair da Conta</Text>
        </TouchableOpacity>

        {/* Spacer */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Background branco para o menu */}
      <View style={[styles.navBarBackground, { backgroundColor: bgColor }]} />

      {/* Navigation Bar Fixo */}
      <View style={[styles.navBar, { backgroundColor: bgColor, borderTopColor: borderColor }]}>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('home')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navLabel, { color: secondaryColor }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('pets')}>
          <Text style={styles.navIcon}>🐾</Text>
          <Text style={[styles.navLabel, { color: secondaryColor }]}>Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('vitals')}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={[styles.navLabel, { color: secondaryColor }]}>Vitais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={[styles.navLabel, styles.navLabelActive, { color: accentColor }]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 100,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 24,
  },

  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  profileCard: {
    marginHorizontal: 16,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
  },
  profileAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarEmoji: {
    fontSize: 48,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
  },
  editButtonContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  editButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  editActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  input: {
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
    fontSize: 14,
  },
  dataCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  dataIcon: {
    fontSize: 24,
  },
  dataContent: {
    flex: 1,
  },
  dataLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  dataValue: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  petCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  petEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  petName: {
    fontSize: 14,
    fontWeight: '600',
  },
  petBreed: {
    fontSize: 12,
    marginTop: 4,
  },
  logoutButton: {
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 24,
  },
  logoutButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#c62828',
  },
  spacer: {
    height: 40,
  },
  navBarBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navItemActive: {
    opacity: 1,
  },
  navIcon: {
    fontSize: 24,
  },
  navLabel: {
    fontSize: 10,
  },
  navLabelActive: {
    fontWeight: '600',
  },
});
