import { StyleSheet } from "react-native";
import { RotationGestureHandler } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
    },
    searchBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        borderRadius: 10
    },
    searchIcon: {
        position: 'relative'
    },
    searchInput: {
        width: '90%',
        borderRadius: 10,
        height: 40,
        paddingLeft: 10
    },
    sortFilterFeature:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    sortFeature:{  
        flexDirection: 'row',
    },
    filterFeature:{
        flexDirection:'row',
    },
    swapIcon:{
        transform: [{ rotate: "90deg" }]
    }
});

export default styles;