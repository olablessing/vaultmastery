import {isTemplateElement} from '@babel/types';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import Paginator from './Paginator';
import slides from '../model/slides';

export default function Onboardingitem({item}) {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <ImageBackground
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}>
        <View style={styles.logoView}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/224bcecfd046705c10629febee09d980.png')}
          />
        </View>
        <View style={styles.top}>
          {/* <Paginator data={slides} /> */}

          <View style={styles.topinside}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.desciption}</Text>
          </View>
        </View>
      </ImageBackground>

      {/* <Text style={styles.title}>Screen</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,

    justifyContent: 'space-between',
  },
  logoView: {
    padding: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  top: {
    flex: 0.45,
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // borderWidth: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontWeight: '500',
    fontSize: 26,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    color: '#000000',
    paddingHorizontal: 60,
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9F9F9F',
    paddingHorizontal: 46,
  },
  topinside: {
    paddingBottom: 100,
  },
});
