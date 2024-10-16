import { StatusBar } from "expo-status-bar";
import Background from "./components/imagebackground";
import Title from "./components/header";
import Temporizador from "./components/Temporizador";
import SelectorTiempo from "./components/SelectorTiempo";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Alert,
  ImageBackground,
} from "react-native";


export default function App() {
  return (
    <Background>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <Title/>
        <Temporizador/>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
