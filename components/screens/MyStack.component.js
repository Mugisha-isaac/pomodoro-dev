import * as React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.component';
import ProfileScreen from './ProfileScreen.component';


const Stack = createNativeStackNavigator();

const MyStack = ()=>{
    return(
     <View> 
    <Text>Learning React Navigation</Text>
     <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name="Home" component={HomeScreen} options={{title:'Welcome'}}/>
             <Stack.Screen name="Profile" component={ProfileScreen}/>
         </Stack.Navigator>
     </NavigationContainer>
     </View>  
    );
}

export default MyStack;