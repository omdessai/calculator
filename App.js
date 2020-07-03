import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  Me:{
    flex:1,
    backgroundColor: 'green',
  },
  header: {
    backgroundColor: 'red',
    flex:1,
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  footer:{
    backgroundColor: 'white',
    flex:1,
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    borderBottomEndRadius:50,
    borderBottomStartRadius:50
  },
  body:{
    backgroundColor: 'yellow',
    flex:8,
    borderRadius:50,
    margin:10,
  },
  title:{
    fontSize: 35,
  },
  buttonContainer:{
    flex:1,
    flexDirection:'row',
    borderRadius:50,
    margin:10,
    alignItems:'center',
    justifyContent:'space-around',
  },
  hi:{
    margin:5,
    backgroundColor:'white',
    borderWidth:1,
    borderRadius:20,
    width:40

  },
  ans:{
    fontSize: 25,
  },
  ansContainer:{
    height: 40,
    flexDirection:'row',
    borderRadius:10,
    borderWidth:2,
    margin:25,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-around',
  }
})

const App: () => React$Node = () => {

  return(
    <View style={styles.Me}>
        <View style={styles.header}>
          <Text style={styles.title}>Calculator</Text>
        </View>
        <View style={styles.body}>
        <View style={styles.ansContainer}>
          <Text style={styles.ans}>0</Text>
        </View>

        <View style={styles.buttonContainer}>
        <View style={styles.hi}><Button title = '0'></Button></View>
        </View>

        <View style={styles.buttonContainer}>
        
        <View style={styles.hi}><Button title = '-'></Button></View>
        <View style={styles.hi}><Button title = '1'></Button></View>
        <View style={styles.hi}><Button title = '4'></Button></View>
        <View style={styles.hi}><Button title = '7'></Button></View>
        <View style={styles.hi}><Button title = '+'></Button></View>

        
        </View>

        <View style={styles.buttonContainer}>
        <Button title = '/' style={styles.hi}></Button>
        <Button title = '2' style={styles.hi}></Button>
        <Button title = '5' style={styles.hi}></Button>
        <Button title = '8' style={styles.hi}></Button>
        <Button title = '*' style={styles.hi}></Button>
        </View>

        <View style={styles.buttonContainer}>

        </View>

        <View style={styles.buttonContainer}>
        </View>


        </View>
        <View style={styles.footer}>
          <Text>App by Om Dessai</Text>
        </View>
    </View>
  );
};
export default App;