import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { mockPets, mockVitals } from '../constants/mockData';
import { createCommonStyles } from '../styles/commonStyles';
import { User } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  user: User | null;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function HomeScreen({
  onNavigate,
  user,
  isDarkMode,
  onToggleDarkMode,
}: HomeScreenProps) {
  const mainPet = mockPets[0];
  const commonStyles = createCommonStyles(isDarkMode);
  const { colors } = commonStyles;
  const { bgColor, textColor, secondaryColor, cardBg, borderColor, accentColor } = colors;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => onNavigate('profile')}
          >
            <Text style={styles.userIcon}>👤</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Image
              source={require('../assets/icon.png')}
              style={{ width: 50, height: 50 }}
            />
            <Text style={[styles.logoText, { color: textColor }]}>Zelo Pet</Text>
          </View>
          <TouchableOpacity
            style={styles.themeButton}
            onPress={onToggleDarkMode}
          >
            <Text style={styles.themeIcon}>{isDarkMode ? '🌙' : '☀️'}</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View style={styles.greetingSection}>
          <Text style={[styles.greetingTitle, { color: textColor }]}>
            Olá, {user?.name || 'Usuário'}
          </Text>
          <Text style={[styles.greetingSubtitle, { color: secondaryColor }]}>
            Acompanhe a saúde de {mainPet.name} hoje.
          </Text>
        </View>

        {/* Pet Card */}
        <View style={[styles.petCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.petHeader}>
            <Text style={styles.petEmoji}>🐕</Text>
            <View style={styles.petInfo}>
              <Text style={[styles.petName, { color: textColor }]}>{mainPet.name}</Text>
              <Text style={[styles.petBreed, { color: secondaryColor }]}>
                {mainPet.breed} • {mainPet.age} anos
              </Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: accentColor + '20' }]}>
              <Text style={[styles.statusText, { color: accentColor }]}>✓ {mainPet.status}</Text>
            </View>
          </View>
          <Text style={[styles.lastUpdate, { color: secondaryColor }]}>Última leitura: 10 min atrás</Text>
        </View>

        {/* Métricas */}
        <View style={styles.metricsRow}>
          <View style={[styles.metricCard, { backgroundColor: cardBg, borderColor }]}>
            <Text style={styles.metricIcon}>❤️</Text>
            <Text style={[styles.metricLabel, { color: secondaryColor }]}>BPM</Text>
            <Text style={[styles.metricValue, { color: textColor }]}>{mockVitals.heartRate}</Text>
            <Text style={[styles.metricStatus, { color: accentColor }]}>↓ Normal</Text>
          </View>
          <View style={[styles.metricCard, { backgroundColor: cardBg, borderColor }]}>
            <Text style={styles.metricIcon}>🏃</Text>
            <Text style={[styles.metricLabel, { color: secondaryColor }]}>Atividade</Text>
            <Text style={[styles.metricValue, { color: textColor }]}>1.2h</Text>
            <Text style={[styles.metricStatus, { color: accentColor }]}>✓ Meta</Text>
          </View>
        </View>

        {/* Histórico */}
        <View style={[styles.historyCard, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.historyHeader}>
            <Text style={[styles.historyTitle, { color: textColor }]}>Histórico de Saúde</Text>
            <TouchableOpacity style={[styles.filterButton, { backgroundColor: accentColor + '20' }]}>
              <Text style={[styles.filterText, { color: accentColor }]}>Peso (kg)</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.chartPlaceholder, { backgroundColor: accentColor + '20' }]}>
            <Text style={[styles.chartText, { color: secondaryColor }]}>📊 Gráfico de Peso</Text>
          </View>
          <View style={[styles.historyFooter, { borderTopColor: borderColor }]}>
            <Text style={[styles.historyLabel, { color: secondaryColor }]}>Tendência atual</Text>
            <Text style={[styles.historyTrend, { color: accentColor }]}>📈 Estável (+0.2kg)</Text>
          </View>
        </View>

        {/* Spacer para menu fixo */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Background branco para o menu */}
      <View style={[styles.navBarBackground, { backgroundColor: bgColor }]} />

      {/* Navigation Bar Fixo */}
      <View style={[styles.navBar, { backgroundColor: bgColor, borderTopColor: borderColor }]}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navLabel, styles.navLabelActive, { color: accentColor }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('pets')}>
          <Text style={styles.navIcon}>🐾</Text>
          <Text style={[styles.navLabel, { color: secondaryColor }]}>Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('vitals')}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={[styles.navLabel, { color: secondaryColor }]}>Vitais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('profile')}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={[styles.navLabel, { color: secondaryColor }]}>Perfil</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  userButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0a7ea4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    fontSize: 20,
  },
  headerCenter: {
    alignItems: 'center',
  },
  logoImage: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  themeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0a7ea4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeIcon: {
    fontSize: 20,
  },
  greetingSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 14,
  },
  petCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  petHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  petEmoji: {
    fontSize: 40,
    marginRight: 12,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  petBreed: {
    fontSize: 12,
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  lastUpdate: {
    fontSize: 12,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  metricCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  metricIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  metricLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  metricStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  historyCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
  },
  chartPlaceholder: {
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  chartText: {
    fontSize: 14,
  },
  historyFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
  },
  historyLabel: {
    fontSize: 12,
  },
  historyTrend: {
    fontSize: 12,
    fontWeight: '600',
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
