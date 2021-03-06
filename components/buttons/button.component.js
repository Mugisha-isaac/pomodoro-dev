import React from 'react';
import {TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';

import {FontAwesome} from '@expo/vector-icons';

const Button = ({iconName,onPress})=>{
    return(
   <TouchableOpacity onPressOut={onPress}>
       <FontAwesome name={iconName} size={80} color="#ffffff"/>
   </TouchableOpacity>
    );
}


Button.propTypes = {
    iconName: propTypes.string.isRequired,
    onPress: propTypes.func.isRequired
}
export default Button;