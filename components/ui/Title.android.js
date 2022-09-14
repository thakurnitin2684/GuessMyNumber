import { Text, StyleSheet, Platform, useWindowDimensions } from "react-native";

function Title({ children }) {
  const { height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 20 : 100;
  return (
    <Text style={[styles.title, { marginTop: marginTopDistance }]}>
      {children}
    </Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginTop: 50,
    // fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
