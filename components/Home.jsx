import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router';

export default function Home() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>One Login to Rule Them All</Text>
        <Link href='/login' style={styles.pressable}>Login</Link>
        <Link href='/register' style={styles.pressable}>Sing up</Link>
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
      color: '#ffA500',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 20,
      fontWeight: 'bold',
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