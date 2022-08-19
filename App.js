import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SIZE = 50
export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.mainCircle}>
        <TouchableOpacity style={styles.target} />
        <TouchableOpacity style={styles.circle} />
        <TouchableOpacity style={styles.circle1} />
        <TouchableOpacity style={styles.circle2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  target: {
    width: 15,
    height: 15,
    borderRadius: 10,
    // borderWidth: 30,
    // borderColor: "white",
    position: 'absolute',
    backgroundColor: 'red',
    top: 243,
    left: 243,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 30,
    borderColor: "white",
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 200,
    left: 200,
  },
  circle2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 40,
    borderColor: "white",
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 150,
    left: 150
  },

  mainCircle: {
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: 'black'
  },


});
