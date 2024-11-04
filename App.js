import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StatusScreen from './src/screens/StatusScreen';
import CallScreen from './src/screens/CallScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ListChatScreen from './src/screens/ListChatScreen';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Chat');

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
    <View style={styles.container}>
      <StatusBar backgroundColor={'#091c22'} />
      {/* Header */}
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
          <Icon
            name="menu"
            size={30}
            color="#FFFFFF"
            style={{marginRight: 10}}
          />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>{renderScreen()}</View>

      {/* Bottom Navigation */}
      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('Chat')}>
          <Icon name="chat" size={25} color="#FFFFFF" />
          <Text
            style={
              selectedTab === 'Chat' ? styles.activeTabText : styles.tabText
            }>
            Chats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('Pembaruan')}>
          <Icon name="replay" size={25} color="#FFFFFF" />
          <Text
            style={
              selectedTab === 'Pembaruan'
                ? styles.activeTabText
                : styles.tabText
            }>
            Pembaruan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('Komunitas')}>
          <Icon name="people" size={25} color="#FFFFFF" />
          <Text
            style={
              selectedTab === 'Komunitas'
                ? styles.activeTabText
                : styles.tabText
            }>
            Komunitas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('Panggilan')}>
          <Icon name="call" size={25} color="#FFFFFF" />
          <Text
            style={
              selectedTab === 'Panggilan'
                ? styles.activeTabText
                : styles.tabText
            }>
            Panggilan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  content: {
    flex: 1,
    backgroundColor: '#091c22', // Pastikan ini sama dengan latar belakang di ChatScreen
  },
  bottomTab: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 0.2,
    // borderColor: '#ddd',
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
