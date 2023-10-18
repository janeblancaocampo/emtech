import Constants from "expo-constants";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import React, { Component } from "react";

export default class StatusB extends Component {
    state = {
        info: null
      };
   
      render() {
         // const {info} = this.state;
         const isConnected = NetInfo.addEventListener(state => {
            state.isConnected ? true : false;
         });
         // const isConnected = info !== 'none';
         const backgroundColor = isConnected ? 'white': 'red';
         // Subscribec
         const statusBar = <StatusBar
            backgroundColor={backgroundColor}
            barStyle={isConnected ? 'dark-content' : 'light-content'}
            animated={false}
            />
         const messageContainer = (
            <View style={styles.messageContainer} pointerEvents={'none'}>
               {statusBar}
               {!isConnected && (
                  <View style={styles.bubble}>
                     <Text style={styles.text}>No Network Connection</Text>
                     {console.log('working')}
                  </View>
               )}
            </View>
         )
         if(Platform.OS == 'ios') {
            return (
            <View style={[styles.status, backgroundColor]}>
               {messageContainer}
            </View>
            )
         }
         return messageContainer; 
      }
   }
   
   let statusHeight = (Platform.OS == 'ios' ? statusHeight : 0);

const styles = StyleSheet.create({
  messageContainer: {
    zIndex: 1,
    position: "absolute",
    top: Constants.statusBarHeight + 20,
    right: 0,
    left: 0,
    height: 80,
    alignItems: "center",
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});