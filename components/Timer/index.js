import React from 'react';
import {StyleSheet,View,Text,StatusBar, Alert} from 'react-native';
import Button from '../buttons/button.component';

const Timer = ()=>{
    return (
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
          <View style={styles.upper}>
            <Text style={styles.time}>
              25:00
            </Text> 
          </View>
          <View style={styles.lower}>
           <Button iconName="play-circle" onPress={()=>Alert.alert('Start Timer!')}/>
           <Button iconName="stop-circle" onPress={()=>Alert.alert('Stop Timer!')}/>
          </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000',
        width: '100%'
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lower:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    time:{
        color:'#ffffff',
        fontSize:120,
        fontWeight:'100'
    }
})

export default Timer;