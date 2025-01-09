import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function registerScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register now</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={'rgba(255, 165, 0, .5)'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Set a new Password"
                placeholderTextColor={'rgba(255, 165, 0, .5)'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable onPress={handleRegister} style={styles.login_button}>
                <Text style={styles.button_label} >Register</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '100%',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        color: '#ffA500',
    },
    input: {
        height: 50,
        marginBottom: 12,
        paddingHorizontal: 16,
        color: '#ffA500',
        borderRadius: 15,
        width: '80%',
        maxWidth: 450,
        backgroundColor: 'rgba(139, 0, 0, .3)',
        fontSize: 15,


    },
    login_button: {
        width: '70%',
        color: '#111',
        height: 40,
        backgroundColor: '#ffA500',
        borderRadius: 15,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 400,
      },
      button_label: {
        color: '#111',
        fontWeight: 'bold',
        fontSize: 20,
      }
});