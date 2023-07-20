import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Button } from 'react-native';
import BottomNavigation from './components/Navbar';
import Card from './components/Card';


export default function App() {
  
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Logique d'état et de traitement des données avec fetch
  const getPoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      Promise.all(
        json.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((res) => res.json())
            .then((data) => {
              return data;
            });
        })
      ).then((pokeList) => {
        setPokemon(pokeList);
        setIsLoading(false);
      });
    });
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => {getPoke()} }>
        <Text style={{color:"white"}}>Fetch</Text>
      </Pressable>
      
      {isLoading ? (<Text></Text>) : (
        pokemon.map((p) => (
          <Card
          key={p.name}
          name={p.name}
          spriteUrl={p.sprites?.front_default}
          id={p.id}
          height={p.height}
          weight={p.weight}
        />
        ))
        )}
        <BottomNavigation />
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable:{
    backgroundColor: 'blue',
    padding:16,
    borderRadius: 8,
  }
});
