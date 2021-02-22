import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BtnTeacher from './BtnTeacher';

function Card({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_card}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.image}
            source={{
              uri: data.image,
            }}
          />
          <Text style={styles.text_name}>{data.name}</Text>
        </View>
        <View style={styles.wrapper_title}>
          <Text style={styles.title}>Formation</Text>
          <Text style={styles.result}>{data.formation}</Text>
        </View>
        <View style={styles.wrapper_title}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.result}>{data.description}</Text>
        </View>
      </View>
      <BtnTeacher
        title="Prendre un cours avec ce Teach'r"
        backgroundColor="blue"
        color="white"
        style={{marginBottom: 10}}
      />
      <BtnTeacher
        title="Retirer ce Teach'r de mes favoris"
        backgroundColor="white"
        color="orange"
        borderColor="orange"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0.6,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  wrapper_card: {
    height: 300,
    width: '100%',
    padding: 10,
  },
  text_name: {
    fontSize: 20,
    width: 200,
    marginLeft: 10,
  },
  wrapper_title: {
    marginTop: 30,
  },
  title: {
    color: 'grey',
  },
  result: {
    fontWeight: '800',
  },
});

export default Card;
