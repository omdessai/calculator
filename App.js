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
});

firstRowButtons = ['-', '1', '4', '7', '+'];
calcButtons = [
  ['0'],
  ['-', '1', '4', '7', '+'],
  ['/', '2', '5', '8', '*'],
  ['3', '6', '9'],
  ['=', '⌫']
]

num1 = "";
num2 = "";
symbol = "";

isSymbol = (w)=> {
  return ( w == '+' || w == '-' || w == '/' || w == '*');
}

const App: () => React$Node = () => {

  [ansText, setansText] = useState("");

  onButtonPressed = (a) => {
    if(a == calcButtons [4][1]){
      setansText(ansText.substring(0, ansText.length-1));
    }
    else {
      if (isSymbol (a))
      {
        num1 = ansText;
        symbol = a;
      }
      if (a == '='){
        num2=ansText.substring(num1.length + 1, ansText.length);

        ans = 0;

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        switch(symbol){
          case '+': ans = num1 + num2;
          break;
          case '*': ans = num1 * num2;
          break;
          case '/': ans = num1 / num2;
          break;
          case '-': ans = num1 - num2;

        }
        console.log(ans);
        setansText(ansText + a + ans);
        return;

      }
      setansText(ansText + a) ;
      console.log(ansText);
      console.log("num1 =>" + num1 + " num2 => " + num2+ " symbol => " + symbol);
    }
  }

  return(
    <View style={styles.Me}>
        <View style={styles.header}>
          <Text style={styles.title}>Calculator</Text>
        </View>
        <View style={styles.body}>
        <View style={styles.ansContainer}>
          <Text style={styles.ans}>{ansText}</Text>
        </View>
      {
        calcButtons.map(buttonArray => (
          <View style={styles.buttonContainer}>
              {
                buttonArray.map(Ent => (
                  <View style={styles.hi}><Button title = {Ent} onPress = {() => this.onButtonPressed(Ent)}></Button></View>
                ))
              }
          </View>
        ))
      }
        </View>
        <View style={styles.footer}>
          <Text>App by Om Dessai</Text>
        </View>
    </View>
  );
};
export default App;