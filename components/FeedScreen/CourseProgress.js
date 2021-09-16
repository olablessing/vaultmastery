import React, {useState} from 'react';
import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import SelectableChips from 'react-native-chip/SelectableChips';
import {Dimensions} from 'react-native';
import {alignContent, fontWeight} from 'styled-system';
import {SliderPicker} from 'react-native-slider-picker';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function CourseProgress() {
  return (
    <View style={styles.padding}>
      <Text style={styles.top}>Course Progress</Text>
      <Text style={styles.sub}>5 courses in progress</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <First />

        <Second />
      </ScrollView>

      <View style={styles.padding}>
        <Text style={styles.top}>Top Categories</Text>
        <View style={styles.direction}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Maths</Text>
          </View>
          <View style={styles.category2}>
            <Text style={styles.categoryText2}>Art</Text>
          </View>
          <View style={styles.category2}>
            <Text style={styles.categoryText2}>English</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const First = () => {
  const [state, setState] = useState(25);
  return (
    <View style={styles.progress}>
      <View style={styles.paddingimage}>
        <View style={styles.direction}>
          <View style={styles.imagebackground}>
            <Image
              style={styles.image}
              source={require('../../assets/images/book.png')}
            />
          </View>
          <View>
            <Text style={styles.text}>English Literature</Text>
            <Text style={styles.text}>Introductory Course</Text>
          </View>
        </View>
        <View style={styles.slider}>
          <SliderPicker
            // minLabel={'0'}
            // midLabel={'50'}
            // maxLabel={'100'}
            maxValue={100}
            callback={position => {
              setState({value: position});
            }}
            defaultValue={state}
            // labelFontColor={'#6c7682'}
            // labelFontWeight={'600'}
            showFill={true}
            fillColor={'#10113C'}
            labelFontWeight={'bold'}
            // showNumberScale={true}
            // showSeparatorScale={true}
            buttonBackgroundColor={'#fff'}
            buttonBorderColor={'#10113C'}
            buttonBorderWidth={7}
            scaleNumberFontWeight={'300'}
            buttonDimensionsPercentage={6}
            heightPercentage={2.5}
            widthPercentage={70}
          />
        </View>
        <Text style={{alignSelf: 'center', color: '#fff'}}>
          8 Videos . 12 Files . 3 Quiz
        </Text>
      </View>
    </View>
  );
};

const Second = () => {
  const [state, setState] = useState(25);
  return (
    <View style={styles.progress2}>
      <View style={styles.paddingimage}>
        <View style={styles.direction}>
          <View style={styles.imagebackground}>
            <Image
              style={styles.image}
              source={require('../../assets/images/book.png')}
            />
          </View>
          <View>
            <Text style={styles.text}>French Literature</Text>
            <Text style={styles.text}>Introductory Course</Text>
          </View>
        </View>
        <View style={styles.slider}>
          <SliderPicker
            // minLabel={'0'}
            // midLabel={'50'}
            // maxLabel={'100'}
            maxValue={100}
            callback={position => {
              setState({value: position});
            }}
            defaultValue={state}
            // labelFontColor={'#6c7682'}
            // labelFontWeight={'600'}
            showFill={true}
            fillColor={'#527B03'}
            labelFontWeight={'bold'}
            // showNumberScale={true}
            // showSeparatorScale={true}
            buttonBackgroundColor={'#fff'}
            buttonBorderColor={'#527B03'}
            buttonBorderWidth={7}
            scaleNumberFontWeight={'300'}
            buttonDimensionsPercentage={6}
            heightPercentage={2.5}
            widthPercentage={70}
          />
        </View>
        <Text style={{alignSelf: 'center', color: '#fff'}}>
          8 Videos . 12 Files . 3 Quiz
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagebackground: {
    marginHorizontal: 20,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    // borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  categoryText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  categoryText2: {
    color: '#A0A0A0',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  top: {
    fontSize: 24,
    fontWeight: '500',
  },
  sub: {fontSize: 12, fontWeight: '400'},

  category: {
    marginRight: 20,
    marginVertical: 20,

    width: 100,
    height: 50,
    backgroundColor: '#88AA46',
    borderRadius: 50,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  category2: {
    marginRight: 20,
    marginVertical: 20,
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  padding: {
    marginTop: 20,
  },
  text: {
    color: '#fff',
  },
  slider: {
    width: Width - 300,
    marginRight: 180,
    marginLeft: 100,
  },
  paddingimage: {marginTop: 20},
  progress2: {
    marginLeft: 20,
    marginTop: 30,
    width: Width - 90,
    height: Height / 4,
    backgroundColor: '#4E4F6D',
    // borderWidth: 1,
    borderRadius: 30,
    borderColor: '#4E4F6D',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'stretch',
  },
  progress: {
    marginLeft: 20,
    marginTop: 30,
    width: Width - 90,
    height: Height / 4,
    backgroundColor: '#527B03',
    // borderWidth: 1,
    borderRadius: 30,
    borderColor: '#527B03',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'stretch',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
