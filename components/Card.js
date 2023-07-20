import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Card = ({ name, spriteUrl }) => {
 console.log(spriteUrl);
  
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: spriteUrl}} style={styles.spriteUrl}/>
      <Text style={styles.name}>{name}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  id: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  spriteUrl: {
    width: 100,
    height: 100,
  }
});

export default Card;