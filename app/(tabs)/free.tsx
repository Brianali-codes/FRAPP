import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

interface Giveaway {
  id: number;
  title: string;
  thumbnail: string; 
  short_description: string;
  game_url : string; 
}


const [isLoading, setIsLoading] = useState(true);
const [giveaways, setGiveaways] = useState<Giveaway[]>([]); // Define state with type
const url = 'https://www.freetogame.com/api/games';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const finalData: Giveaway[] = await response.json();
    setGiveaways(finalData);
    setIsLoading(false);
    console.log(finalData);
  } catch (error) {
    console.error('Error fetching data:', error);
    setIsLoading(false);
  }
};

// Use useEffect to fetch data on component mount
useEffect(() => {
  fetchData();
}, []);




export default function HomeScreen() {
  return (
      <ThemedView style={styles.container}>
        <ThemedText  style={styles.text} >FREE GAMES</ThemedText>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {isLoading ? (
          <ThemedText>Loading...</ThemedText>
        ) : (
          giveaways.map(giveaway => (
            <ThemedView key={giveaway.id} style={styles.cards}>
              <ThemedText style={styles.text}>
                {giveaway.title}
              </ThemedText>
              
              <img src={giveaway.thumbnail} alt="Thumbnails" />
              <ThemedText style={styles.giveawayText}>
                {giveaway.short_description}
              </ThemedText>
              <a href={giveaway.game_url}>
                <Button mode="contained">Get Giveaway</Button>
              </a>
            </ThemedView>
          ))
        )}
      </ScrollView>
      </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full screen height
    backgroundColor: '#5c5c5c',
    padding: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    borderColor: 'white',
    backgroundColor: '#5c5c5c',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 20, // Space at the bottom of the scrollable content
    gap: 10,
  },
  giveawayText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});


