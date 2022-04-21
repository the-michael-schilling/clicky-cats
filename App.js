
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/


import React, { useState } from 'react';
import { SectionList, StyleSheet, Button, Text, View,  Image, SafeAreaView } from 'react-native';

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

const dataOne = [
  {
    title: 'D', data: ['Devin', 'Dan', 'Dominic']
  },
  {
    title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John']
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
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

      <SectionList
        sections={dataOne}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    height: 44,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;
