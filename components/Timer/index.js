import React from 'react';
import {StyleSheet,View,Text,StatusBar, Alert} from 'react-native';
import Button from '../buttons/button.component';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as actions} from './actions';


const formatTime = (time)=>{
    let minutes = Math.floor(time/60);
    time-= minutes * 60;
    let seconds = parseInt(time % 60,10);
    // console.log(minutes > 0 ? `${minutes < 10 ? '0': ''}${minutes}`: seconds)

    return minutes > 0 ? `${minutes < 10 ? '0': ''}${minutes}`: seconds
}

const Timer = (props)=>{
    const [currentProps,setcurrentProps] = React.useState(props)
    const [interval,setinterval] = React.useState(props)

    React.useEffect(()=>{
        let nextProps = {...props}
        // console.log("current props",currentProps)
        // console.log("next props",nextProps)
        if(!currentProps.isPlaying && nextProps.isPlaying){
            const timeInterval = setInterval(()=>{
                currentProps.AddSecond();
            },1000)
            setinterval(timeInterval)
        }
        else if(currentProps.isPlaying && !nextProps.isPlaying){
            clearInterval(interval)
        }
        setcurrentProps(nextProps)
    },[props])

    const {elapsedTime,timerDuration,StartTimer,AddSecond,isPlaying,RestartTimer} = currentProps

    return (
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
          <View style={styles.upper}>
            <Text style={styles.time}>
             {formatTime(timerDuration-elapsedTime)}
            </Text> 
          </View>
          <View style={styles.lower}>
              {!isPlaying && (
           <Button iconName="play-circle" onPress={StartTimer}/>
           )}
           {isPlaying &&(<Button iconName="stop-circle" onPress={RestartTimer}/>)}
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


function mapDispatchToProps(dispatch){
   return{
    StartTimer: bindActionCreators(actions.StartTimer,dispatch),
    RestartTimer: bindActionCreators(actions.RestartTimer,dispatch),
    AddSecond: bindActionCreators(actions.AddSecond,dispatch)
   }
}

function mapStateToProps(state){
    const {isPlaying,elapsedTime,timerDuration} = state;

    return {
        isPlaying,elapsedTime,timerDuration
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Timer);