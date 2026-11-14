
import { Image } from 'expo-image';
import { Link } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const bookCover = require('@/assets/images/Start.png');

export default function Index() {
  return (

    <View style={styles.container}>
      <Text>Morty you're such an idioit! You just blew at the Citadel's supply of Szechuan Sauce! You're such an idiot Morty! That was supposed to my thing in nine more seasons! Quick Morty, trust Grampa and get in the portal!
       {"\n\n"}
       </Text>
      <Image source={bookCover} style={styles.image} />
      <Link href="/start" style={styles.button}>   ENTER THE PORTAL</Link>
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
  }
});