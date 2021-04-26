import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 20,
    zIndex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIcon: {
    paddingRight: 15
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: "#404040"
  }
});

export default styles;