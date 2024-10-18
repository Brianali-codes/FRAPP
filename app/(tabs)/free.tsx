import { ScrollView, StyleSheet, Image } from 'react-native'; 
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState, useEffect } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { Alert } from 'react-native';
//initital type highliting for better error handling thanks to typescript.

interface Giveaway {
  id: number;
  title: string;
  thumbnail: string; 
  image:string;
  short_description: string;
  open_giveaway_url : string; 
  open_giveaway:string;
  worth:string;
  game_url:string;
}

export default function HomeScreen() {

  const [isLoading, setIsLoading] = useState(true);
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]); // Define state with type
  const url = 'https://corsproxy.io/?https://www.freetogame.com/api/games';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const finalData: Giveaway[] = await response.json();
      setGiveaways(finalData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      Alert.alert('Unable to fetch games check your connection or relaunch the app.');
    }
  };

  // Use useEffect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>
        <TabBarIcon name={'gift-sharp'} style={styles.icons}/>
        FREE GAMES
      </ThemedText>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {isLoading ? (
            <>
              <Skeleton animation="wave" style={styles.skeletonImage}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
              <Skeleton animation="wave" style={styles.skeletonImage}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
            </>
        ) : (
          giveaways.map(giveaway => (
            <>
            
            <ThemedView key={giveaway.id} style={styles.cards}>
              <ThemedText style={styles.text} >
                {giveaway.title}
              </ThemedText>  
              <Image source={{ uri: giveaway.thumbnail }} style={styles.cardImage} />
              <ThemedText style={styles.giveawayText}>
                {giveaway.short_description}
              </ThemedText>
                <Button mode="contained"
                  onPress={() => Linking.openURL(giveaway.game_url)}
                >Get Game for free</Button>
            </ThemedView>
            </>
          ))
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes the full screen height to enable scrolling.
    backgroundColor: '#1b2838',
    padding: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:5,
    gap:5,
  },
  skeletonImage:{
    width:'100%',
    height:300,
    borderRadius:10,
  },
  skeletonImage2:{
    width:'100%',
    height:50,
    borderRadius:10,
  },
  cards: {
    borderColor: 'white',
    backgroundColor: '#2C415A',
    marginBottom: 10,
    borderRadius: 7,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    marginVertical: 5,
    marginHorizontal: 5,
    padding:20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  worth:{
    textDecorationLine:'line-through',
    color:'white',
  },
  icons: {
    marginBottom: 4,
    fontSize:21,
  },
  scrollViewContent: {
    paddingBottom: 20, 
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

