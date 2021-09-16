import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {
  alignContent,
  fontSize,
  justifyContent,
  paddingTop,
} from 'styled-system';
import Icon from 'react-native-vector-icons/FontAwesome5';
import client, {API} from '../api/client';
export default function Login({navigation}) {
  const [hidePass, setHidePass] = useState(true);
  const [disabled, setdisabled] = useState(false);
  const signin = async (values, formikActions) => {
    setdisabled(true);
    console.log(values);
    try {
      const {data} = await API.post('/signin', {
        ...values,
      });
      if ('message' in data) {
        console.log('error');
        Toast.show('please check your email and password');
        setdisabled(false);
        // toast('You have no Account,Please Register');
        // navigate('/register');
      } else {
        await AsyncStorage.setItem('@storage_Key', data.token);
        // localStorage.setItem('username', JSON.stringify(data.result.name));
        // localStorage.setItem('useremail', JSON.stringify(data.result.email));
        // localStorage.setItem(
        //   'tguser',
        //   JSON.stringify(data.result.telegramusername),
        // );
        console.log(data.token);
        const value = await AsyncStorage.getItem('@storage_Key');
        console.log(value);

        if (value != null) {
          navigation.navigate('Home');
        }
      }
    } catch (error) {
      setdisabled(false);
      Toast.show(
        'Please check your internet connection and your login credentials',
      );
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/images/0d010da9c85ceeac2b944ed2978511f4.png')}>
        <View style={styles.containerview}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#2C2D48', '#88AA46']}
            style={styles.linearGradient}>
            <ScrollView>
              <View style={styles.logoView}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/images/224bcecfd046705c10629febee09d980.png')}
                />
              </View>

              <View style={styles.padding}>
                <Text style={styles.text}>Sign In</Text>
                <Formik
                  initialValues={{email: '', password: ''}}
                  onSubmit={signin}>
                  {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View>
                      <Text style={styles.heading}>Email ID</Text>
                      <TextInput
                        style={styles.input}
                        selectionColor={'#fff'}
                        underlineColorAndroid={'#fff'}
                        // autoFocus
                        focusable
                        blurOnSubmit
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      />
                      <Text style={styles.heading}>Password</Text>
                      <View style={styles.passwordContainer}>
                        <TextInput
                          style={styles.inputStyle}
                          selectionColor={'#fff'}
                          underlineColorAndroid={'#fff'}
                          // autoFocus
                          focusable
                          autoCorrect={false}
                          secureTextEntry={hidePass ? true : false}
                          password={true}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                        />
                        <Icon
                          name={hidePass ? 'eye-slash' : 'eye'}
                          size={15}
                          color="#fff"
                          onPress={() => setHidePass(!hidePass)}
                        />
                      </View>

                      <TouchableOpacity
                        style={styles.Button}
                        onPress={handleSubmit}
                        disabled={disabled}
                        // onPress={() => navigation.navigate('Home')}
                        title="Submit">
                        <LinearGradient
                          colors={['#88AA46', '#88AA46']}
                          style={styles.linearGradientButton}>
                          <View style={styles.Button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  )}
                </Formik>
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerview: {
    flex: 1,
    opacity: 0.6,
  },
  image: {
    flex: 1,
  },
  circleGradient: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    // borderBottomWidth: 1,
    // borderColor: '#000',
    paddingBottom: 30,
  },
  inputStyle: {
    flex: 1,
    color: '#fff',
  },
  heading: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 50,

    // backgroundColor: '#000000c0',
  },
  input: {
    // paddingBottom: 30,
    // margin: 15,
    // height: 40,
    color: '#fff',
  },
  padding: {paddingHorizontal: 20},
  logoView: {
    padding: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  linearGradientButton: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
  },
  Button: {
    alignContent: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});
