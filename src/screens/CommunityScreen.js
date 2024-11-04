import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, Text, View, Dimensions} from 'react-native';
import StatusScreen from './StatusScreen';

const {width} = Dimensions.get('window'); // Mendapatkan lebar layar

const CommunityScreen = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
      <Image
        style={{width: 200, height: 150, borderRadius: 30, margin: 30}}
        source={{
          uri: 'https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?t=st=1730367986~exp=1730371586~hmac=c92478a56e005c505bdf0152596b240dcff802db16720f79d0f0a51eb270e73f&w=900',
        }}
      />
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Tetap Terhubung dengan komunitas
      </Text>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          textAlign: 'center',
        }}>
        Komunitas menyatukan anggota dalam grup berdasarkan topik dan memudahkan
        untuk menerima pengumuman admin. Setiap komunitas yang anda ikuti akan
        muncul di sini.
      </Text>
      <TouchableOpacity>
        <Text style={{color: '#3579cc', fontSize: 16, padding: 10}}>
          Lihat contoh Komunitas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => StatusScreen()}
        style={{
          backgroundColor: '#40bf72',
          paddingHorizontal: width * 0.28,
          paddingVertical: 10,
          borderRadius: 30,
          marginTop: 30,
          alignSelf: 'center',
        }}>
        <Text
          style={{color: '#22272e', fontWeight: 'bold', textAlign: 'center'}}>
          Mulai Komunitas Anda
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommunityScreen;
