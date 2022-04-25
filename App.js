
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useState } from 'react';
import {
  SectionList,
  StyleSheet,
  StatusBar,
  Button,
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

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

const SectionHeader = ({section}) => {
  const title = section.title;
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

const SectionFooter = ({section}) => {

  return (
    <View style={styles.sectionFooter}>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: '#dcdcdc'
        }}
      />
    </View>
  );
}


const Contact = ({item}) => {

  const [isHungry, setIsHungry] = useState(true);
  const name = item.id;

  return (
    <View style={styles.contactSection}>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: '#dcdcdc'
        }}
      />
      <Text style={[ styles.contactDescription ]}>
        Hello, I am { name }, and I am {isHungry ? "hungry" : "full"}!!
      </Text>

      <View style={styles.buttonContainer}>
        <Icon.Button
          name= { isHungry ? "call-outline" : "alarm-sharp" }
          onPress={() => {
            isHungry ? setIsHungry(false) : setIsHungry(true);
          }}
          /*
          backgroundColor={
          
          }
          */
          // disabled={!isHungry}
        >
          { isHungry ? "Pour me some milk, please!" : "Thank you!" }
        </Icon.Button>
      </View>
    </View>
  );
}


const App = () => {

  const backgroundStyle = { backgroundColor: 'rgba(247,247,247,1.0)' };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar/>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{
          width: 200,
          height: 200,
          flexDirection: "row",
          alignSelf: "center"
        }}
      />
      <SectionList
        sections={dataOne}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => <SectionHeader section={section} />}
        renderItem= {({ item }) => <Contact item={item} />}
        renderSectionFooter={({ section }) => <SectionFooter section={section} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: 24,
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 12,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sectionFooter: {
    paddingHorizontal: 24,
  },
  contactSection: {
    paddingHorizontal: 24,
    // marginBottom: 8,
  },
  contactDescription: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '400',
  },
  buttonContainer: {
    marginTop: 12,
    marginLeft: 48,
    marginRight: 48,
    marginBottom: 12,
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
