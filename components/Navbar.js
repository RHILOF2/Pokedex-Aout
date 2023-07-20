import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';


const BottomNavigation = () => {
    const [isPressed, setIsPressed] = useState(false);
    
    const handlePressIn = () => {
        setIsPressed(true);
    };
    
    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity 
            style={[styles.button, isPressed && styles.buttonHovered]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            {<Text style={styles.buttonText}><Ionicons name="md-list" size={24} color="black" /></Text>}
        </TouchableOpacity>
        <TouchableOpacity 
            style={[styles.button, isPressed && styles.buttonHovered]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            {<Text style={styles.buttonText}><AntDesign name="hearto" size={24} color="black" /> </Text>}
        </TouchableOpacity>
        <TouchableOpacity 
            style={[styles.button, isPressed && styles.buttonHovered]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            {<Text style={styles.buttonText}><MaterialCommunityIcons name="pokeball" size={24} color="black" /></Text>}
        </TouchableOpacity>
        
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'bottom',
      height: 60,
      backgroundColor: '#1E90FF',
      borderTopWidth: 1,
      borderTopColor: '#CCCCCC',
      width: '100%',
      position: 'absolute',
    bottom: 0,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonHovered: {
      backgroundColor: 'red',
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
export default BottomNavigation;