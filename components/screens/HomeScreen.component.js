import * as React from 'react';
import {Button,navigation} from 'react-native';

const HomeScreen = ()=>{
    return(
        <Button title={" Go to Jane's Profile"} onPress={()=>navigation.navigate('Profile',{name:'Jane'})}/>
    )
}

export default HomeScreen;