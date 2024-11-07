import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, FlatList, Image} from 'react-native';
import chats from '../data/chat';

const ListChatScreen = () => {
  const HeaderChat = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 15,
          alignItems: 'center',
        }}>
        <Icon
          name="archive"
          size={25}
          color="#FFFFFF"
          style={{marginHorizontal: 28}}
        />
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', flex: 1}}>
          Diarsipkan
        </Text>
        <Text style={{fontSize: 16, color: '#00c463', marginRight: 10}}>
          63
        </Text>
      </View>
    );
  };

  const FooterChat = () => {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 20,
            paddingTop: 10,
            borderBottomWidth: 0.2,
            borderColor: '#7b8385',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#7b8385',
            }}>
            Ketuk dan tahan chat untuk opsi lainnya
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Icon name="lock" size={15} color="#FFFFFF" />
          <Text
            style={{
              color: '#7b8385',
            }}>
            {' '}
            Pesan pribadi Anda
          </Text>
          <Text
            style={{
              color: '#006e4b',
            }}>
            {' '}
            terenkripsi secara end-to-end
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
      }}>
      <FlatList
        data={chats}
        ListHeaderComponent={HeaderChat}
        ListFooterComponent={FooterChat}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'blue',
              marginBottom: 10,
              padding: 10,
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 60,
                height: 60,
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
                  marginBottom: 4,
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#FFFFFF'}}>
                  {item.nama}
                </Text>
                <Text style={{fontSize: 16, color: '#9da3a5'}}>
                  {item.waktu}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  //   marginTop: 3,
                }}>
                <Text style={{fontSize: 16, color: '#9da3a5'}}>
                  {item.pesan}
                </Text>
                <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 12.5,
                    backgroundColor: '#00c765',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#22272e', fontWeight: 'bold'}}>1</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListChatScreen;
