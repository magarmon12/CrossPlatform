import {View, Text, StyleSheet, Pressable} from 'react-native'
import {useState} from 'react'
export function TestButton ( props: any) {
    const[count,setCount] =useState<number>(0)
    return (
        <View>
            <Pressable style={styles.button} onPress={ () => setCount(count + 1) }>
                 <Text style = {styles.buttonText}>Tapped {count} times</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
    },
    buttonText:{
        color: "white",
    }
})