
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useState } from 'react';
import { SectionList, StyleSheet, Button, Text,
          View,  Image, SafeAreaView } from 'react-native';
import Icons from 'react-native-vector-icons';

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


const Contact = ({item}) => {

  const [isHungry, setIsHungry] = useState(true);
  const name = item.id;

  return (
    <View style={styles.item}>
      <Text>
        Hello, I am { name }, and I am {isHungry ? "hungry" : "full"}!!
      </Text>
      <Button
        title="Press me"
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#607D8B",
          }}
      />
    </View>
  );
}


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
        renderItem= {({ item }) => <Contact item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 66,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});

export default App;
