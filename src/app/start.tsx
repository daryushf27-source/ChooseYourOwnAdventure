import { Image } from 'expo-image';
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const bookCover1 = require('@/assets/images/Running.png');

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Morty! The Citadel of Ricks are on our tail!! Quick Morty where should we go!
        {"\n\n"}
        </Text>
      <Link href="/Blips&Chitz" style={styles.button}> Teleport to Blips and Chitz</Link>

      <Link href="/Anatomy" style={styles.button}> Teleport to Anatomy Park</Link>
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