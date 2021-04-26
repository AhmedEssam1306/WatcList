import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { Searchbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WatchItem = (props) => {

  const { image, title, viewValue, delValue } = props.watch;
  
  return (
    <View style={styles.watchScreen}>
      <View style={styles.cardContainer}>
        <View style={styles.watchInfo}>
          <Text style={styles.watchTitle}>{title}</Text>

          <View style={styles.viewsTimeContainer}>
            <View style={styles.viewBox}>
              <Ionicons name="person" size={20} color="black" />
              <Text style={styles.viewCount}>{viewValue}</Text>
            </View>
            <View style={styles.timeBox}>
              <MaterialCommunityIcons name="timer-sand" size={20} color="black" />
              <Text style={styles.timeCount}>{delValue} months</Text>
            </View>
          </View>
        </View>

        <View style={styles.watchImg}>
          <Image
            source={image}
            style={styles.image} />
        </View>
      </View>
    </View>
  );

};

export default WatchItem;
