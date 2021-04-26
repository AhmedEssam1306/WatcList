import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    watchScreen: {
        flex: 1,
        width: '100%',
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    cardContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        borderColor: '#f6f6f6',
        borderWidth: 3,
        height: '100%',
        maxHeight: 130,
        borderRadius: 10,
        padding: 5,
    },
    watchInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 2,
        paddingLeft: 10,
        paddingBottom: 5
    },
    watchTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingRight: 30
    },
    viewsTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 40
    },
    viewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#F0F0F0',
        padding: 10,
        marginRight: 10
    },
    viewCount: {
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: '700'
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#F0F0F0',
        padding: 10
    },
    timeCount: {
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: '700'
    },
    watchImg: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f6f6f6',
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
        resizeMode: 'contain',
        backgroundColor: 'white'
    }
});

export default styles;