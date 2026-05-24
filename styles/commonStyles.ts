import { StyleSheet } from 'react-native';

export const createCommonStyles = (isDarkMode: boolean) => {
  const bgColor = isDarkMode ? '#0F172A' : '#fff';
  const textColor = isDarkMode ? '#ffffff' : '#000';
  const secondaryColor = isDarkMode ? '#64748b' : '#666';
  const cardBg = isDarkMode ? '#1e293b' : '#f9f9f9';
  const borderColor = isDarkMode ? '#334155' : '#e0e0e0';
  const accentColor = isDarkMode ? '#38BDF8' : '#0a7ea4';

  return {
    colors: {
      bgColor,
      textColor,
      secondaryColor,
      cardBg,
      borderColor,
      accentColor,
    },
    container: StyleSheet.create({
      container: {
        flex: 1,
      },
      scrollView: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 100,
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
      navBarBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: '#fff',
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
    }),
    header: StyleSheet.create({
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
        width: 50,
        height: 50,
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
    }),
    card: StyleSheet.create({
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
    }),
    text: StyleSheet.create({
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      subtitle: {
        fontSize: 14,
      },
      label: {
        fontSize: 12,
        fontWeight: '600',
      },
    }),
  };
};
