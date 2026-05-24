import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Image,
} from 'react-native';

import { mockPets, mockVaccines } from '../constants/mockData';
import { createCommonStyles } from '../styles/commonStyles';
import { User } from '../App';

interface PetsScreenProps {
  onNavigate: (screen: string) => void;
  user: User | null;
  isDarkMode: boolean;
}

export default function PetsScreen({ onNavigate, user, isDarkMode }: PetsScreenProps) {
  const [selectedPetId, setSelectedPetId] = useState(mockPets[0].id);
  const [showVaccines, setShowVaccines] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const selectedPet = mockPets.find(p => p.id === selectedPetId);
  const commonStyles = createCommonStyles(isDarkMode);
  const { colors } = commonStyles;
  const { bgColor, textColor, secondaryColor, cardBg, borderColor, accentColor } = colors;

  const getVaccineStatusColor = (status: string) => {
    switch (status) {
      case 'APLICADA':
        return '#4caf50';
      case 'PENDENTE':
        return '#f44336';
      case 'AGENDADA':
        return '#2196f3';
      default:
        return '#999';
    }
  };

  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDateSelect = (day: number) => {
    setSelectedDate(`${day}/06/2026`);
    setShowCalendar(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Image
              source={require('../assets/icon.png')}
              style={{ width: 50, height: 50 }}
            />
            <Text style={[styles.headerTitle, { color: textColor }]}>ZeloPet</Text>
          </View>
          <TouchableOpacity style={styles.profileButton} onPress={() => onNavigate('profile')}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Pet Selector */}
        <View style={styles.selectorSection}>
          <Text style={[styles.selectorTitle, { color: textColor }]}>Selecionar Pet</Text>
          <FlatList
            data={mockPets}
            horizontal
            scrollEnabled={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedPetId(item.id)}
                style={styles.petSelectorItem}
              >
                <View
                  style={[
                    styles.petSelectorCircle,
                    selectedPetId === item.id && [styles.petSelectorCircleActive, { borderColor: accentColor, backgroundColor: accentColor + '20' }],
                    { borderColor },
                  ]}
                >
                  <Text style={styles.petSelectorEmoji}>🐕</Text>
                </View>
                <Text style={[styles.petSelectorName, { color: textColor }]}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* New Pet Button */}
        <TouchableOpacity style={[styles.newPetButton, { backgroundColor: accentColor }]}>
          <Text style={styles.newPetIcon}>➕</Text>
          <Text style={styles.newPetText}>Novo Pet</Text>
        </TouchableOpacity>

        {selectedPet && (
          <>
            {/* Tabs */}
            <View style={[styles.tabsContainer, { backgroundColor: accentColor + '20' }]}>
              <TouchableOpacity
                style={[styles.tab, showVaccines && [styles.tabActive, { backgroundColor: accentColor }]]}
                onPress={() => setShowVaccines(true)}
              >
                <Text style={[styles.tabText, showVaccines && styles.tabTextActive, { color: showVaccines ? '#fff' : textColor }]}>
                  Vacinas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, !showVaccines && [styles.tabActive, { backgroundColor: accentColor }]]}
                onPress={() => setShowVaccines(false)}
              >
                <Text style={[styles.tabText, !showVaccines && styles.tabTextActive, { color: !showVaccines ? '#fff' : textColor }]}>
                  Vermífugos
                </Text>
              </TouchableOpacity>
            </View>

            {/* Digital Booklet */}
            <View style={[styles.bookletCard, { backgroundColor: cardBg, borderColor }]}>
              <Text style={[styles.bookletTitle, { color: textColor }]}>Caderneta Digital</Text>
              <Text style={[styles.bookletDate, { color: secondaryColor }]}>Última atualização: Hoje, 10:45</Text>
            </View>

            {/* Vaccines List */}
            {showVaccines && (
              <View style={styles.vaccinesList}>
                {mockVaccines.map((vaccine, index) => (
                  <View key={vaccine.id} style={[styles.vaccineItem, { backgroundColor: cardBg, borderColor }]}>
                    <View style={styles.vaccineTimeline}>
                      <View
                        style={[
                          styles.vaccineIndicator,
                          { backgroundColor: getVaccineStatusColor(vaccine.status) },
                        ]}
                      >
                        <Text style={styles.vaccineIndicatorText}>
                          {vaccine.status === 'APLICADA' ? '✓' : vaccine.status === 'PENDENTE' ? '!' : '⏰'}
                        </Text>
                      </View>
                      {index < mockVaccines.length - 1 && <View style={[styles.vaccineConnector, { backgroundColor: borderColor }]} />}
                    </View>

                    <View style={styles.vaccineContent}>
                      <Text style={[styles.vaccineName, { color: textColor }]}>{vaccine.name}</Text>
                      <Text style={[styles.vaccineDescription, { color: secondaryColor }]}>{vaccine.description}</Text>

                      <View
                        style={[
                          styles.vaccineStatusBadge,
                          { backgroundColor: getVaccineStatusColor(vaccine.status) + '20' },
                        ]}
                      >
                        <Text style={[styles.vaccineStatusText, { color: getVaccineStatusColor(vaccine.status) }]}>
                          {vaccine.status}
                        </Text>
                      </View>

                      <Text style={[styles.vaccineDate, { color: secondaryColor }]}>📅 {vaccine.date}</Text>

                      {vaccine.status === 'PENDENTE' && (
                        <TouchableOpacity
                          style={[styles.scheduleButton, { borderColor: accentColor }]}
                          onPress={() => setShowCalendar(true)}
                        >
                          <Text style={[styles.scheduleButtonText, { color: accentColor }]}>Agendar agora</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* Tip */}
            <View style={[styles.tipBox, { backgroundColor: accentColor + '20', borderLeftColor: accentColor }]}>
              <Text style={styles.tipIcon}>💡</Text>
              <View style={styles.tipContent}>
                <Text style={[styles.tipTitle, { color: accentColor }]}>Dica do ZeloPet</Text>
                <Text style={[styles.tipText, { color: accentColor }]}>
                  Mantenha a vacinação em dia para garantir que o {selectedPet.name} possa frequentar parques com total segurança!
                </Text>
              </View>
            </View>
          </>
        )}

        {/* Spacer */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Calendar Modal */}
      <Modal visible={showCalendar} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: cardBg }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: textColor }]}>Escolher Data</Text>
              <TouchableOpacity onPress={() => setShowCalendar(false)}>
                <Text style={[styles.closeButton, { color: textColor }]}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.monthText, { color: secondaryColor }]}>Junho 2026</Text>

            <View style={styles.calendarGrid}>
              {generateCalendarDays().map(day => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    selectedDate === `${day}/06/2026` && [styles.dayButtonSelected, { backgroundColor: accentColor }],
                    { borderColor }
                  ]}
                  onPress={() => handleDateSelect(day)}
                >
                  <Text style={[styles.dayText, selectedDate === `${day}/06/2026` && { color: '#fff' }, { color: textColor }]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {selectedDate && (
              <View style={[styles.selectedDateBox, { backgroundColor: accentColor + '20' }]}>
                <Text style={[styles.selectedDateText, { color: accentColor }]}>
                  Data selecionada: {selectedDate}
                </Text>
              </View>
            )}

            <TouchableOpacity
              style={[styles.confirmButton, { backgroundColor: accentColor }]}
              onPress={() => setShowCalendar(false)}
            >
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Background branco para o menu */}
      <View style={[styles.navBarBackground, { backgroundColor: bgColor }]} />

      {/* Navigation Bar Fixo */}
      <View style={[styles.navBar, { backgroundColor: bgColor, borderTopColor: borderColor }]}>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('home')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navLabel, { color: secondaryColor }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>🐾</Text>
          <Text style={[styles.navLabel, styles.navLabelActive, { color: accentColor }]}>Pets</Text>
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
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 20,
  },
  headerCenter: {
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0a7ea4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
  selectorSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  selectorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  petSelectorItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  petSelectorCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  petSelectorCircleActive: {
    borderWidth: 4,
  },
  petSelectorEmoji: {
    fontSize: 40,
  },
  petSelectorName: {
    fontSize: 12,
    fontWeight: '600',
  },
  newPetButton: {
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  newPetIcon: {
    fontSize: 18,
  },
  newPetText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  tabActive: {
    borderWidth: 0,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#fff',
  },
  bookletCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  bookletTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookletDate: {
    fontSize: 12,
  },
  vaccinesList: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  vaccineItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  vaccineTimeline: {
    alignItems: 'center',
    marginRight: 12,
  },
  vaccineIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vaccineIndicatorText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  vaccineConnector: {
    width: 2,
    height: 48,
    marginTop: 8,
  },
  vaccineContent: {
    flex: 1,
  },
  vaccineName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vaccineDescription: {
    fontSize: 12,
    marginBottom: 8,
  },
  vaccineStatusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  vaccineStatusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  vaccineDate: {
    fontSize: 12,
    marginBottom: 8,
  },
  scheduleButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
  },
  scheduleButtonText: {
    fontSize: 12,
    fontWeight: '600',
  },
  tipBox: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 80,
  },
  tipIcon: {
    fontSize: 24,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
  },
  monthText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  dayButton: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayButtonSelected: {
    borderWidth: 0,
  },
  dayText: {
    fontSize: 14,
    fontWeight: '600',
  },
  selectedDateBox: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  selectedDateText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  confirmButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 14,
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
