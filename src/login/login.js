import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <StatusBar barStyle="light-content" />
            <ScrollView>
                <View style={Styles.main}>
                    <Text style={Styles.headerText}>👋 CodeLinigo аккаунтқа кіру</Text>
                </View>
                <View style={{ top: 50 }}>
                    <Text style={Styles.label}>Email:</Text>
                    <TextInput style={Styles.input} placeholder="Email-ды жазыңыз" placeholderTextColor="#CCC9DC" />

                    <Text style={Styles.label}>Пароль:</Text>
                    <TextInput style={Styles.input} placeholder="Құпиясөзді жазыңыз" placeholderTextColor="#CCC9DC" secureTextEntry={true} />
                </View>
                <View style={{ top: 100, alignItems: 'center' }}>
                    <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Start')}>
                        <Text style={Styles.buttonText}>Кіру</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010011',
        padding: 5,
    },
    main: {
        height: 75,
        padding: 10,
    },
    headerText: {
        color: '#CCC9DC',
        fontSize: 23,
        textAlign: 'center',
        marginTop: 10,
    },
    label: {
        color: '#CCC9DC',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
    },
    input: {
        backgroundColor: '#1B2A41',
        textTransform: 'lowercase',
        color: '#CCC9DC',
        borderRadius: 8,
        padding: 10,
        margin: 10,
    },
    button: {
        backgroundColor: '#1B2A41',
        borderRadius: 8,
        padding: 10,
        width: 250,
    },
    buttonText: {
        color: '#CCC9DC',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default Login;
