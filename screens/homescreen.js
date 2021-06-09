import React from 'react';
import { Text, View } from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class Homescreen extends React.Component{
    render(){
        return(
            <View>
                <SafeAreaProvider>
                <MyHeader title = "Home Screen"/>
                </SafeAreaProvider>
            </View>
        )
    }
}