import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('screen')
export default function App() {

  const Circle = ({ size = 100, zIndex = 5000, target = false }) => {
    return (
      <TouchableOpacity key={size.toString()}
        style={styles.circle(size, zIndex, target)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.numbers}>
        {[1, 2, 3, 4, 5].map(item => (<Text>{item}</Text>))}
      </View>
      {[100, 200, 300, 400, 500].map(item => <Circle size={item} />)}
      <Circle size={10} target={true} />
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
  numbers: {
    position: 'absolute',
    top: 300,
    zIndex: 5000,
    height: 220,
    justifyContent: 'space-between'
  },
  circle: (size, zIndex, target) => ({
    width: size,
    height: size,
    borderRadius: (size / 2),
    borderWidth: target ? 0 : 40,
    borderColor: "white",
    position: 'absolute',
    backgroundColor: target ? 'red' : 'transparent',
    top: (height / 2) - size / 2,
    left: (width / 2) - size / 2,
    zIndex: zIndex - size
  })
});
