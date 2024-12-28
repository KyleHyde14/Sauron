import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'

export default function Home() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>One Login to Rule Them All</Text>
        <Pressable
            title="Signup"
            onPress={() => navigation.navigate('Signup')}
            style={styles.pressable}
        ><Text style={styles.buttonLabel}>Sing Up</Text></Pressable>
        <Pressable
            title="Login"
            onPress={() => navigation.navigate('Login')}
            style={styles.pressable}
        ><Text style={styles.buttonLabel}>Login</Text></Pressable>
        <StatusBar style="light" />
    </View>)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: '#ffA500',
    },
    pressable: {
      width: '80%',
      height: 50,
      backgroundColor: 'rgba(139, 0, 0, .3)',
      borderRadius: 15,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 450,
    },
    buttonLabel: {
      color: '#ffA500',
      fontWeight: 'bold',
      fontSize: 20,
    }
  });