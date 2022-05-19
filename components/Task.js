import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Task(props) {
    return (
        <>
                <View style={styles.todoItem}>
                    <Text style={styles.todoText}>{props.text}</Text>
                </View>
        </>
    )
}



const styles = StyleSheet.create({
    todoItem: {
        padding: 5,
        marginTop: 10,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'silver',
        width: '100%'

    },
    todoText:{
        fontSize: 20,
    }
})
