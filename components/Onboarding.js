import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  useWindowDimensions,
} from 'react-native';
import Onboardingitem from './Onboardingitem';
import Paginator from './Paginator';
import slides from '../model/slides';
import {Dimensions} from 'react-native';
import NextButton from './NextButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Onboarding({navigation}) {
  useEffect(() => {
    async () => {
      const value = await AsyncStorage.getItem('@storage_Key');
      console.log(value)
      if (value != null) {
        navigation.navigate('Home');
      }
    };
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={slides}
        renderItem={({item}) => <Onboardingitem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <View style={styles.container}>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
      <View style={styles.button}>
        <NextButton navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'none',
    position: 'absolute',
    top: Height / 1.65,
    left: Width / 2.2,

    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    top: Height / 1.2,
    left: Width / 2.4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#88AA46',
    marginHorizontal: 3,
    justifyContent: 'center',
  },
});
