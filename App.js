import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button} from 'react-native';
import Header from './components/Header';
import ToDo from './components/TodoItem';
import TodoInput from "./components/TodoInput";



export default function App() {
    const [allItems, setAllItems] = useState([]);
    const [listState, setListState] = useState('all');


    const addTodo = (text) => {
        setAllItems((prevItems) => [{id: Math.random().toString(), title: text, checked: false}, ...prevItems]);
    }

    const changeCheckStatus = (id) => {
        setAllItems((prevItems) => {
            return prevItems.map((item) => {
                if(item.id == id)
                    item.checked = true
                return item
            })
        })
    }

    const checkListState = () => {
        if(listState === 'all')
            return allItems;
        else if (listState === 'done') {
            return allItems.filter((item) => item.checked === true);
        }
        else if (listState === 'active') {
            return allItems.filter((item) => item.checked === false);
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <TodoInput addTodo={addTodo}/>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setListState('all')}
                >
                    <Text style={styles.btnText}>All Items</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setListState('done')}
                >
                    <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setListState('active')}
                >
                    <Text style={styles.btnText}>Active</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={checkListState()}
                renderItem={({ item }) => (
                    <ToDo item={item} pressHandler={changeCheckStatus}/>
                )}
                ListEmptyComponent={<Text style={styles.emptyList}>No Items Added Yet!</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(125,167,252,0.58)',
        alignItems: 'center',
    },
    emptyList: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#777',
    },
    btnContainer: {
        flexDirection: 'row',
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#777',
        borderRadius: 15,
    },
    btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
});
