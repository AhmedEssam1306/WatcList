import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WatchList from "../WatchList";

function ClientsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Clients!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'black',
                labelStyle: { fontSize: 15, fontWeight: '700' },
                style: { backgroundColor: 'white', marginTop: '15%',elevation: 0,borderBottomWidth:1, borderBottomColor: '#e2e2e2'},
                indicatorStyle: { backgroundColor: 'black' },
                
            }}>

            <Tab.Screen
                name="Clients"
                component={ClientsScreen}
                options={{ tabBarLabel: 'Clients' }} />

            <Tab.Screen
                name="Watches"
                component={WatchList}
                options={{ tabBarLabel: 'Watches' }} />
        </Tab.Navigator>
    );
}


export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
};
