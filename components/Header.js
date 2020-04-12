import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.textHeader}>To Do</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#777',
    },
    header: {
        marginTop: 50,
    },
})