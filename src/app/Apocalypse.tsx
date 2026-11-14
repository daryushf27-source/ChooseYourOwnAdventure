import { Image } from 'expo-image';
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const bookCover1 = require('@/assets/images/Apocalypse.png');

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Nice work Morty! Those bastards will never find us here! Wait Morty, is that a time machine!? You little bastard give me that bac--!
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