import { Image } from 'expo-image';
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const bookCover1 = require('@/assets/images/Blips and Chitz.png');

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>
        
        Good Choice Morty! But we still got to get out of here, a "Die Hard won't shake these bastards!
        {"\n\n"}
        </Text>
      <Link href="/Galactic" style={styles.button}> Teleport to Galactic federation</Link>

      <Link href="/Apocalypse" style={styles.button}> Teleport to Apocalypse World</Link>
            <Image source={bookCover1} style={styles.image} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
  image: {
    width: 320,
    height: 480,
    borderRadius: 4,
  },
});