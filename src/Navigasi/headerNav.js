import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({selectedTab}) {
  const renderHeaderTitle = () => {
    switch (selectedTab) {
      case 'Chat':
        return 'WhatsApp';
      case 'Pembaruan':
        return 'Pembaruan';
      case 'Komunitas':
        return 'Komunitas';
      case 'Panggilan':
        return 'Panggilan';
      default:
        return 'Chat';
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{renderHeaderTitle()}</Text>
      <View style={styles.iconContainer}>
        <Icon
          name="camera"
          size={30}
          color="#FFFFFF"
          style={{marginRight: 20}}
        />
        <Icon
          name="search"
          size={30}
          color="#FFFFFF"
          style={{marginRight: 20}}
        />
        <Icon name="menu" size={30} color="#FFFFFF" style={{marginRight: 10}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#091c22',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});
