import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './Login';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const size = 60;

export default function ({navigation}) {
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View>
      <View style={styles.roundindication}>
        <Svg width={size} height={size}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="#F4338f"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 60) / 100}
          />
        </Svg>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
           onPress={()=>navigation.navigate('Signup')}
      >
        <Image
          style={styles.tinyLogo}
          source={require('../assets/images/Vector.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    elevation: 2,
    // top:  1.65,
    // left: 2.2,
    backgroundColor: '#88AA46',
    // padding: 35,
    width: size - 10,
    height: size - 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
    overflow: 'hidden',
  },
  tinyLogo: {},
  roundindication: {
    display: 'none',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
