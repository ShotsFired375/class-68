import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent: 'center', alignItems:'center', backgroundColor:'lightgrey'}}>
            <Text style={{fontSize:36, fontWeight:'bold'}}>Search Book or Student</Text>

            </View>
        )
    }
}