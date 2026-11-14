import { Image } from 'expo-image';
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const bookCover1 = require('@/assets/images/Poop.png');

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Ahhhh Morty, ussually I would never let you on this planet! But no Rick would ever dare enter another Rick's pooping planet. Morty is that a time machine in your hand!? Give me that back you litt--!
        {"\n\n"}
        </Text>


      <Link href="/start" style={styles.button}> Teleport back in time</Link>
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