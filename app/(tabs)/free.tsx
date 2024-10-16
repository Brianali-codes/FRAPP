import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';


const [argument, setArgument] = useState('')
const url = `corsproxy.io/?https://www.freetogame.com/api/games`

    const fetchGames = async ()=>{
      const response = await fetch(url)
      const res = await response.json()
      setArgument(res)
      console.log(res)
      }
  useEffect(()=>{
    fetchGames()
  }),
  ([])



export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>   
        <ThemedText  style={styles.text} >FREE GAMES</ThemedText>
        
      </ThemedView>
    
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    backgroundColor:'#1b2838',
    gap: 8,
    marginBottom: 8,
    padding:5,
  },
  text: {
    color:'white',
    fontFamily: 'sans-serif',
    fontWeight:'bold',
    fontSize: 20,
  },
});
