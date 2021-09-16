import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Animated,
  useWindowDimensions,
  Text,
  View,
} from 'react-native';

export default Paginator = ({scrollX, data}) => {
  const {width} = useWindowDimensions();
  // console.log(scrollX);
  // console.log('checked');
  const progressAnimation = useRef(new Animated.Value(0)).current
  return (
    <View style={{flexDirection: 'row', height: 20, paddingTop: 10}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange:[0.3,1,0.3],
          extrapolate:'clamp'
        })
        return (
          <Animated.View
            style={[styles.dot,
              
              {width: dotWidth,
          opacity
          }
        ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#88AA46',
    marginHorizontal: 3,
    justifyContent: 'center',
  },
});
