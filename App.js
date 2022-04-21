
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/


import React, { useState } from 'react';
import { FlatList, StyleSheet, Button, Text, View,  Image, SafeAreaView } from 'react-native';

 /*
 const Cat = (props) => {

   const [isHungry, setIsHungry] = useState(true);

   return (
     <View style={styles.container}>
       <Text style={styles.bigRed}>
         Hello, I am {props.name}, and I am {isHungry ? "hungry" : "full"}!!
       </Text>
       <Button
         onPress={() => {
           setIsHungry(false);
         }}
         disabled={!isHungry}
         title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
       />
     </View>
   );
 }
 */

const DATA = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
];

const renderItem = ({ item }) => (
  <Text style={styles.item}>{item.key}</Text>
);

const App = () => {
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{
          width: 200,
          height: 200,
          flexDirection: "row",
          alignSelf: "center",
          }}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    height: 44,
  },
});

export default App;
