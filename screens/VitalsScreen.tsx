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

interface VitalsScreenProps {
  onNavigate: (screen: string) => void;
  isDarkMode: boolean;
}

export default function VitalsScreen({ onNavigate, isDarkMode }: VitalsScreenProps) {
  const mainPet = mockPets[0];
  const commonStyles = createCommonStyles(isDarkMode);
  const { colors } = commonStyles;
  const { bgColor, textColor, secondaryColor, cardBg, borderColor, accentColor } = colors;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView style={styles.scrollView}>
        {/* Logo */}
        <View style={styles.logoSection}>
          <Image
            source={require('../assets/icon.png')}
            style={{ width: 50, height: 50 }}
          />
          <Text style={[styles.logoText, { color: textColor }]}>Zelo Pet</Text>
        </View>

        {/* Title */}
        <View style={styles.titleSection}>
          <View>
            <Text style={[styles.title, { color: textColor }]}>Sinais Vitais:</Text>
            <Text style={[styles.title, { color: textColor }]}>{mainPet.name}</Text>
          </View>
          <View style={[styles.realtimeTag, { backgroundColor: accentColor + '20' }]}>
            <Text style={[styles.realtimeText, { color: accentColor }]}>Em Tempo Real</Text>
          </View>
        </View>

        <Text style={[styles.subtitle, { color: secondaryColor }]}>
          Monitoramento contínuo das últimas 24 horas.
        </Text>

        {/* Heart Rate */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>❤️</Text>
            <View>
              <Text style={[styles.cardTitle, { color: textColor }]}>Frequência Cardíaca</Text>
              <Text style={[styles.cardSubtitle, { color: secondaryColor }]}>Média 24h</Text>
            </View>
          </View>

          <View style={styles.cardValue}>
            <Text style={[styles.value, { color: textColor }]}>{mockVitals.heartRate}</Text>
            <Text style={[styles.unit, { color: secondaryColor }]}>bpm</Text>
            <Text style={[styles.trend, { color: accentColor }]}>↓ down</Text>
          </View>

          <View style={[styles.chart, { backgroundColor: accentColor + '20' }]}>
            <Text style={[styles.chartText, { color: secondaryColor }]}>📊 Gráfico de BPM (24h)</Text>
          </View>
        </View>

        {/* Sleep Quality */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🌙</Text>
            <View>
              <Text style={[styles.cardTitle, { color: textColor }]}>Qualidade do Sono</Text>
              <Text style={[styles.cardSubtitle, { color: secondaryColor }]}>Última noite</Text>
            </View>
          </View>

          <View style={styles.cardValue}>
            <Text style={[styles.value, { color: textColor }]}>{mockVitals.sleep}</Text>
            <Text style={[styles.unit, { color: secondaryColor }]}>horas</Text>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={[styles.progressLabel, { color: secondaryColor }]}>Sono Leve</Text>
              <Text style={[styles.progressLabel, { color: secondaryColor }]}>Profundo ({mockVitals.sleepQuality}%)</Text>
            </View>
            <View style={[styles.progressBar, { backgroundColor: borderColor }]}>
              <View
                style={[styles.progressFill, { width: `${mockVitals.sleepQuality}%`, backgroundColor: accentColor }]}
              />
            </View>
          </View>
        </View>

        {/* Active Calories */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🔥</Text>
            <View>
              <Text style={[styles.cardTitle, { color: textColor }]}>Calorias Ativas</Text>
              <Text style={[styles.cardSubtitle, { color: secondaryColor }]}>Hoje</Text>
            </View>
          </View>

          <View style={styles.cardValue}>
            <Text style={[styles.value, { color: textColor }]}>{mockVitals.calories}</Text>
            <Text style={[styles.unit, { color: secondaryColor }]}>kcal</Text>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressLabels}>
              <Text style={[styles.progressLabel, { color: secondaryColor }]}>Progresso</Text>
              <Text style={[styles.progressLabel, { color: secondaryColor }]}>
                {mockVitals.calories}/{mockVitals.caloriesGoal}
              </Text>
            </View>
            <View style={[styles.progressBar, { backgroundColor: borderColor }]}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${(mockVitals.calories / mockVitals.caloriesGoal) * 100}%`, backgroundColor: '#ff9800' },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Activity Level */}
        <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🏃</Text>
            <Text style={[styles.cardTitle, { color: textColor }]}>Nível de Atividade</Text>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityLabels}>
              <Text style={[styles.activityName, { color: textColor }]}>Passeio Matinal</Text>
              <Text style={[styles.activityTime, { color: textColor }]}>{mockVitals.activity.morning} min</Text>
            </View>
            <View style={[styles.progressBar, { backgroundColor: borderColor }]}>
              <View style={[styles.progressFill, { width: '90%', backgroundColor: accentColor }]} />
            </View>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityLabels}>
              <Text style={[styles.activityName, { color: textColor }]}>Brincadeiras</Text>
              <Text style={[styles.activityTime, { color: textColor }]}>{mockVitals.activity.afternoon} min</Text>
            </View>
            <View style={[styles.progressBar, { backgroundColor: borderColor }]}>
              <View style={[styles.progressFill, { width: '40%', backgroundColor: accentColor }]} />
            </View>
          </View>
        </View>

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
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={[styles.navLabel, styles.navLabelActive, { color: accentColor }]}>Vitais</Text>
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
  logoSection: {
    alignItems: 'center',
    marginBottom: 24,
  },

  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  realtimeTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  realtimeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 32,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  cardValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginBottom: 12,
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  unit: {
    fontSize: 14,
  },
  trend: {
    fontSize: 12,
    fontWeight: '600',
  },
  chart: {
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    fontSize: 14,
  },
  progressContainer: {
    gap: 8,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    fontSize: 12,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  activityItem: {
    marginBottom: 12,
  },
  activityLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  activityName: {
    fontSize: 12,
    fontWeight: '600',
  },
  activityTime: {
    fontSize: 12,
    fontWeight: 'bold',
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
