import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites = ({ favoritePokemons }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokémon Favoris</Text>
      {favoritePokemons.map(pokemon => (
        <View key={pokemon.id} style={styles.favoriteItem}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.id}>ID : {pokemon.id}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  favoriteItem: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  name: {
    // styles pour le nom du Pokémon
  },
  id: {
    // styles pour l'ID du Pokémon
  },
});

export default Favorites;
