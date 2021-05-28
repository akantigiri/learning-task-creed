import { StatusBar  } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';

export default function App() {
  const [a,seta]=useState('0');
  const [b,setb]=useState('0');
  const [c,setc]=useState('');
  const [font,setfont]=useState(12);
  const storea = text =>{
    seta(text);
  };
  const storeb = text =>{
    setb(text);
  };
  const add=()=>{
    var d = parseInt(a);
    var e=parseInt(b);
    d=d+e;
    setc(d+"");
  };
  const fact=()=>{
    let o=1;
    var d = parseInt(a);
    var e=parseInt(b);
    for(let i=1;i<=d;i++){o=o*i;}
    let g=1;
    for(let i=1;i<=e;i++){g=g*i;}
    setc(o+" "+g);
  };
  const addfact=()=>{
    let o=1;
    var d = parseInt(a);
    var e=parseInt(b);
    for(let i=1;i<=d;i++){o=o*i;} 
    let g=1;
    for(let i=1;i<=e;i++){g=g*i;}
    let sum=o+g;
    setc(sum+"");

  }
  return (
    <View style={styles.container}>
      
      <TextInput style={styles.itema} placeholder="operand 1" onChangeText={storea}/>
      <TextInput style={styles.itema} placeholder="operand 2" onChangeText={storeb}/>
      <Button style={styles.item} title="Button-A" onPress={add}/>
      <Button style={styles.item} title="Button-B" onPress={fact}/>
      <Button style={styles.item} title="Button-C" onPress={addfact}/>
      <Button onPress={() =>{
        if(font!==22){
    setfont(font+1);
    styles.itemd={
       fontSize:font,
     marginVertical: '2%',
   padding:'1%',
     } }
   }} title="Button-D"/>
      <Text  style={styles.itemd} >{c}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {marginVertical: '2%',
  padding:'1%'
  
  },
  itema: {marginVertical: '2%',
  padding:'1%',borderBottomColor:'black',
   borderBottomWidth:1, 
  
  }, 
  itemd: { 
    fontSize:'12px',
  marginVertical: '2%',
padding:'1%',
    
  
  },
});
