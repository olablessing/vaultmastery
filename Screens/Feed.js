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
import CourseProgress from '../components/FeedScreen/CourseProgress';
import FeedNavigation from '../components/FeedScreen/FeedNavigation';

const size = 60;
export default function Feed() {
  return (
    <ScrollView style={styles.padding}>
      <FeedNavigation />
      <CourseProgress/>
    </ScrollView>
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
