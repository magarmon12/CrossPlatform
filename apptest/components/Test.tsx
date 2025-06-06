import {View, Text, StyleSheet} from 'react-native'

export function Test (props: any) {
    return (
        <view>
            <Text> { props.greeting }</Text>
        </view>
    )
}

const styles = StyleSheet.create({
    text:{
        color:" white",

    }
})