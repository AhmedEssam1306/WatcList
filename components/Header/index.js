import React, { Component } from "react";
import { Text, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.topHeader}>
                <Text style={styles.welcomeTitle}>Welcome Sirhan</Text>
                <View style={styles.headerIcons}>
                    <Ionicons style={styles.addIcon} name="add-circle" size={35} color="grey" />
                    <Ionicons style={styles.menuIcon} name="menu-outline" size={35} color="grey" />
                </View>
            </View>
        </View>
    );
};

export default Header;