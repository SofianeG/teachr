import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <Button
        title="Go to Favory"
        onPress={() => navigation.navigate('Favorites')}
      />
    </SafeAreaView>
  );
}
