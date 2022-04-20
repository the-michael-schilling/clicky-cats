
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React, { useState } from 'react';
 import { FlatList, StyleSheet, Button, Text, View,  Image, SafeAreaView } from 'react-native';

 //
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
 //

 const styles = StyleSheet.create({
   container: {
     marginTop: 50,
     backgroundColor: 'powderblue'
   },
   bigRed: {
     color: 'red',
     fontWeight: 'bold',
     fontSize: 30,
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   }
 });

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
       <Cat name="Maru" />
       <Cat name="Jellylorum" />
       <Cat name="Copy" />
     </SafeAreaView>
   );
 }

 export default App;
