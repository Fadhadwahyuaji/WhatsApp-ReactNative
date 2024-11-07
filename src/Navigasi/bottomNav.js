import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListChatScreen from '../screens/ListChatScreen';
import StatusScreen from '../screens/StatusScreen';
import CommunityScreen from '../screens/CommunityScreen';
import CallScreen from '../screens/CallScreen';

const BottomNavigationWithScreen = ({selectedTab, setSelectedTab}) => {
  // Render the corresponding screen based on the selected tab
  const renderScreen = () => {
    switch (selectedTab) {
      case 'Chat':
        return <ListChatScreen />;
      case 'Pembaruan':
        return <StatusScreen />;
      case 'Komunitas':
        return <CommunityScreen />;
      case 'Panggilan':
        return <CallScreen />;
      default:
        return <ListChatScreen />;
    }
  };

  // Get icon for each tab
  const getIconName = tab => {
    switch (tab) {
      case 'Chat':
        return 'chat';
      case 'Pembaruan':
        return 'replay';
      case 'Komunitas':
        return 'people';
      case 'Panggilan':
        return 'call';
      default:
        return 'chat';
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* Render the selected screen */}
      <View style={styles.content}>{renderScreen()}</View>

      {/* Bottom Navigation */}
      <View style={styles.bottomTab}>
        {['Chat', 'Pembaruan', 'Komunitas', 'Panggilan'].map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => setSelectedTab(tab)}>
            <Icon name={getIconName(tab)} size={25} color="#FFFFFF" />
            <Text
              style={
                selectedTab === tab ? styles.activeTabText : styles.tabText
              }>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#091c22',
  },
  bottomTab: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#091c22',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#9da3a5',
    fontSize: 14,
  },
  activeTabText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomNavigationWithScreen;
