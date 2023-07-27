import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Hello World</Text>
            </View>
        );
    }
    }
 
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },

    });
export default HomeScreen;