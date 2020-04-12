import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ToDo({ item, pressHandler }) {

    return(
        <TouchableOpacity
            onPress={() => pressHandler(item.id)}
        >
            <Text style={!item.checked ? styles.uncheckedTodoItem : styles.checkedTodoItem}>{item.title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    uncheckedTodoItem: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#777',

    },
    checkedTodoItem: {
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        color: '#197ae7',
    },
})