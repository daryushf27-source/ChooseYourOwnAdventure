import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const bookCover1 = require('@/assets/images/Anatomy.png');

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>
        
        Okay good job morty, I think we lost them... 
        I think it's time we check our my favorite ride here: Pirates of the Pancreas 
        {"\n\n"}
        </Text>
      <Link href="/start" style={styles.button}> Teleport back in Time</Link>
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