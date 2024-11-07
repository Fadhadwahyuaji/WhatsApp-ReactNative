import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Header from './src/Navigasi/headerNav';
import BottomNavigationWithScreen from './src/Navigasi/bottomNav';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Chat');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#091c22'} />
      <Header selectedTab={selectedTab} />
      <BottomNavigationWithScreen
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
