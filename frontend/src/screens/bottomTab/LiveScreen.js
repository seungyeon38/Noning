import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function LiveScreen({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('ChatNav', {screen: 'ChatNav'})}>
        <Text>채팅방리스트</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});