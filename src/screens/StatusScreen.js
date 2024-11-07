import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import dataStatus from '../data/status';

const channelsData = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1730055075810-4c7a4ac885a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Channel 1',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1730055075810-4c7a4ac885a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Channel 2',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1730055075810-4c7a4ac885a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Channel 3',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1730055075810-4c7a4ac885a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Channel 4',
  },
];

const StatusScreen = () => {
  const renderHeader = () => (
    <View style={{padding: 16}}>
      <Text style={{color: '#FFFFFF', fontSize: 22, fontWeight: 'bold'}}>
        Status
      </Text>
      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          paddingBottom: 20,
        }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'grey',
            borderRadius: 35,
            padding: 2,
            marginRight: 10,
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1730055075810-4c7a4ac885a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 250 / 2,
            }}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFFFFF'}}>
            Status Saya
          </Text>
          <Text style={{fontSize: 16, color: '#8c9095'}}>18:00</Text>
        </View>
      </View>
      <Text style={{fontSize: 16, color: '#8c9095', fontWeight: 'bold'}}>
        Pembaruan Terkini
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View
      style={{
        marginBottom: 30,
        paddingTop: 20,
        paddingHorizontal: 16, // Add padding for the footer
        borderTopWidth: 0.3,
        borderColor: '#8c9095',
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 22, fontWeight: 'bold'}}>
        Saluran
      </Text>
      <Text style={{fontSize: 16, color: '#8c9095', marginTop: 10}}>
        Dapatkan berita terbaru tentang topik yang Anda minati. Temukan saluran
        untuk diikuti di bawah ini
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}>
        {channelsData.map(channel => (
          <TouchableOpacity
            key={channel.id}
            style={{
              marginRight: 10,
              alignItems: 'center',
              backgroundColor: '#091c22',
              borderRadius: 10,
              padding: 15,

              borderWidth: 0.3,
              borderColor: 'grey',
            }}>
            <Image
              source={{uri: channel.image}}
              style={{
                width: 65,
                height: 65,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}>
              {channel.name}
            </Text>
            <TouchableOpacity
              onPress={() => console.log(`Follow ${channel.name}`)} // Ganti dengan logika follow
              style={{
                backgroundColor: '#00372b',
                paddingVertical: 5,
                paddingHorizontal: 40,
                borderRadius: 20,
                marginTop: 10,
              }}>
              <Text style={{color: '#9ef8c0', fontWeight: 'bold'}}>Ikuti</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => StatusScreen()}
        style={{
          backgroundColor: '#00c765',
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 30,
          marginTop: 30,
          alignSelf: 'flex-start',
        }}>
        <Text
          style={{color: '#091c22', fontWeight: 'bold', textAlign: 'center'}}>
          Jelajahi lainnya
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={dataStatus}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      renderItem={({item}) => (
        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            paddingBottom: 10,
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#34ae89',
              borderRadius: 35,
              padding: 2,
              marginRight: 10,
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFFFFF'}}>
              {item.nama}
            </Text>
            <Text style={{fontSize: 16, color: '#8c9095'}}>{item.waktu}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{paddingBottom: 100}} // Add padding at the bottom
    />
  );
};

export default StatusScreen;
