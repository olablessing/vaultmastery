import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './Screens/Feed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIcon, {Icons} from './components/AppIcon';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTab = ({type, color, size = 24, isFocused, index}) => {
  const icon = index == 0 ? 'home' : 'heart';
  const gradient = index == 1;
  return (
    <View>
      {gradient ? (
        <LinearGradient
          colors={['#88AA46', '#527B03']}
          start={{x: isFocused ? 0 : 1, y: 0}}
          end={{x: isFocused ? 1 : 0, y: 0}}
          style={styles.middleIcon}>
          <AppIcon
            name={'shopping-basket'}
            type={type}
            size={size}
            color={'white'}
          />
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#88AA46', '#527B03']}
          start={{x: isFocused ? 0 : 1, y: 0}}
          end={{x: isFocused ? 1 : 0, y: 0}}
          style={styles.middleIcon}>
          <AppIcon name={icon} type={type} size={size} color="#fff" />
        </LinearGradient>
      )}
    </View>
  );
};

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.bottomBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? Colors.dark : Colors.gray;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            testID={options.tabBarTestID}
            accessibilityRole="button">
            <BottomTab
              type={
                index !== 1 ? Icons.MaterialCommunityIcons : Icons.FontAwesome5
              }
              index={index}
              isFocused={isFocused}
              size={24}
              color={color}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const App = () => {
  useEffect(() => {
    async () => {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value != null) {
        navigation.navigate('Home');
      }
      console.log('value')
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Root = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      {/* <Tab.Screen name="home" component={Feed} /> */}
      {/* <Tab.Screen name="Messages" component={Messages} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  middleIcon: {
    bottom: 18,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    elevation: 8,
  },
});

export default App;
