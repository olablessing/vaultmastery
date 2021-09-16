import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {paddingTop} from 'styled-system';

export default function FeedNavigation() {
  return (
    <View style={styles.navigations}>
      <TouchableOpacity
        style={[
          styles.profileImgContainer,
          {borderColor: '#A0A0A0', borderWidth: 1},
        ]}
        activeOpacity={0.6}
        //   onPress={() => navigation.navigate('Signup')}
      >
        <Image
          style={styles.profileImg}
          source={require('../../assets/images/Group12.png')}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.profileImgContainer]}
        activeOpacity={0.6}
        //   onPress={() => navigation.navigate('Signup')}
      >
        <Image
          style={styles.profileImgmiddle}
          source={require('../../assets/images/224bcecfd046705c10629febee09d980.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.profileImgContainer,
          {borderColor: '#A0A0A0', borderWidth: 1},
        ]}
        activeOpacity={0.6}
        //   onPress={() => navigation.navigate('Signup')}
      >
        <Image
          style={styles.profileImg}
          source={require('../../assets/images/notificationthin1.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padding: {
    paddingHorizontal: 20,
    paddingTop: 20,
    // backgroundColor: '#fff',
  },
  image: {},
  profileImgContainer: {
    height: 55,
    width: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImg: {
    height: 28,
    width: 28,
    overflow: 'hidden',
  },
  profileImgmiddle: {
    height: 55,
    width: 55,
    overflow: 'hidden',
  },
});


