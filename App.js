import { Constants } from "expo";

import {
  NetInfo,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Status from "./components/status_bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Mikaela Faye E. Popes
        CPE41S1
      </Text>
      <Status />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "white",
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "white",
  },
});