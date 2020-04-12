import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

export default function TodoInput({ addTodo }) {
    const [text, setText] = useState('')

    return(
        <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='What are you going to do today?'
                onChangeText={setText}
            />
            <FontAwesome
                name='plus-circle'
                style={styles.plusButton}
                onPress={() => addTodo(text)}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        marginTop: 25,
    },
    textInput: {
        backgroundColor: 'white',
        width: 300,
        height: 35,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(175,171,171,0.86)',
        padding: 10,
    },
    plusButton: {
        padding: 5,
        color: '#777',
        fontSize: 30,
    },
});

