import * as React from 'react';
import {Button,Text,navigation,route} from 'react-native';

const ProfileScreen = ({navigation,route})=>{
   return <Text>This is {route.params.name}'s profile</Text>
}

export default ProfileScreen;