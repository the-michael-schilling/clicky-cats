
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/


import React, { useState } from 'react';
import { SectionList, StyleSheet, Button, Text, View,  Image, SafeAreaView } from 'react-native';


const Contact = (props) => {

  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Hello, I am {props.name}, and I am {isHungry ? "hungry" : "full"}!!
      </Text>
      <Button
        title="Press me"
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

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
    title: 'Tom Cats',
    data: [
      { id: 'Devin',
        task: '',
      },
      { id: 'Dan',
        task: '',
      },
      { id: 'Dominic',
        task: '',
      },
    ]
  },
  {
    title: 'Ladies',
    data: [
      { id: 'Jackson',
        task: '',
      },
      { id: 'James',
        task: '',
      },
      { id: 'Jillian',
        task: '',
      },
      { id: 'Jimmy',
        task: '',
      },
      { id: 'Joel',
        task: '',
      },
      { id: 'John',
        task: '',
      },
    ]
  }
];

/*
const Item = ({ title }) => (
  const [isHungry, setIsHungry] = useState(true);
  // <Text style={styles.title}>{title}</Text>
  <View style={styles.item}>
    <Text style={styles.title}>Hello, I am {title}</Text>
  </View>
);
*/

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
        keyExtractor={(item, index) => item + index} // Write the keyExtractor


        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}

        renderItem={({ item }) =>
          <Text style={styles.item}>
            Hi, I am { item.id},
          </Text>
        }
        
        /*
        renderItem={({ item, index }) => {
          <Text style={styles.title}>Hello, I am </Text>
          // <Contact name="CAT" />
        }}
        */

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
