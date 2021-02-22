import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Header({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="goBack"
        style={{color: 'white', backgroundColor: 'white'}}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>Teach'rs favoris</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    width: '100%',
    backgroundColor: 'blue',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default Header;
