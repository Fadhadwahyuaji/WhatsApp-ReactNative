import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import chats from '../data/chat';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CallScreen = () => {
  const listFavorit = [
    {
      image:
        'https://images.unsplash.com/photo-1730055075810-4c7a4ac885a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      nama: 'Fadhad',
    },
  ];

  return (
    <View style={{padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
          Favorit
        </Text>
        <Text style={{color: '#007c46', fontSize: 16}}>Lainnya</Text>
      </View>
      <FlatList
        data={listFavorit}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'blue',
              marginBottom: 10,
              paddingVertical: 10,
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 250 / 2,
                marginRight: 20,
              }}
            />
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 4,
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#FFFFFF'}}>
                  {item.nama}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="call"
                    size={25}
                    color="#FFFFFF"
                    style={{marginHorizontal: 20}}
                  />
                  <Icon
                    name="videocam"
                    size={25}
                    color="#FFFFFF"
                    style={{marginLeft: 20}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
        Terbaru
      </Text>
      <FlatList
        data={chats}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'blue',
              // marginBottom: 10,
              paddingVertical: 15,
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 250 / 2,
                marginRight: 10,
              }}
            />
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  //   marginTop: 3,
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    marginBottom: 4,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#FFFFFF',
                    }}>
                    {item.nama}
                  </Text>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="call" size={16} color="#007c46" />
                    <Text
                      style={{fontSize: 16, color: '#9da3a5', marginLeft: 10}}>
                      {item.waktuCall}
                    </Text>
                  </View>
                </View>
                <Icon name="call" size={25} color="#FFFFFF" />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CallScreen;
