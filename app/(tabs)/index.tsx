import { ScrollView, StyleSheet, Image } from 'react-native'; 
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState, useEffect } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';
import { Alert } from 'react-native';
import notifee, { AndroidImportance, TriggerType,AuthorizationStatus } from '@notifee/react-native';
import { Divider } from 'react-native-elements';
import { Skeleton } from '@rneui/base';
 



const NOTIFICATIONS = async() => {

    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    const now = new Date();
    const nextTriggerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 0, 0); // Set to 9 AM the next day

    // Schedule the notification
    await notifee.createTriggerNotification(
      {
        title: 'FRAPP',
        body: 'Check out todays giveaways.',
        android: {
          channelId: 'default',
        },
      },
      {
        type: TriggerType.TIMESTAMP,
        timestamp: nextTriggerTime.getTime(), 
      }
    );

    console.log('Daily notification scheduled for 9 AM tomorrow');
  };
const checkNotificationPermission = async () => {
  const settings = await notifee.requestPermission();

  // Check the authorization status from the returned settings
  if (settings.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
    console.log('Notification permissions granted.');
    NOTIFICATIONS(); // Schedule notifications if permission granted
  } else {
    Alert.alert(
      'Notifications Disabled',
      'Please enable notifications in your settings to receive updates.',
      [{ text: 'OK' }]
    );
  }
};


interface Giveaway {
  id: number;
  title: string;
  thumbnail: string; 
  image:string;
  description: string;
  open_giveaway_url : string; 
  open_giveaway:string;
  worth:string;
}

export default function HomeScreen() {

  const [isLoading, setIsLoading] = useState(true);
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]); // Define state with type
  const url = 'https://corsproxy.io/?https://www.gamerpower.com/api/giveaways';

  


  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const finalData: Giveaway[] = await response.json();
      setGiveaways(finalData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      Alert.alert('Unable to fetch giveaways check your connection or relaunch the app.');
    }
  };

  // Use useEffect to fetch data on component mount
  useEffect(() => {
    fetchData();
    checkNotificationPermission()
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>
        <TabBarIcon name={'gift-sharp'} style={styles.icons}/>
        GIVEAWAYS
      </ThemedText>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {isLoading ? (
            <>
              <Skeleton animation="pulse" style={styles.skeletonImage}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
              <Skeleton animation="pulse" style={styles.skeletonImage}/>
              <Skeleton animation="wave" style={styles.skeletonImage2}/>
            </>
        ) : (
          giveaways.map(giveaway => (
            <>
            <ThemedView key={giveaway.id} style={styles.cards}>
              <ThemedText key={giveaway.title} style={styles.text}>
                {giveaway.title}
              </ThemedText>  
              <Image source={{ uri: giveaway.thumbnail }} style={styles.cardImage} key={giveaway.thumbnail} />
              <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
              <ThemedText style={styles.giveawayText} key={giveaway.description}>
                {giveaway.description}
              </ThemedText>
              <ThemedText style={styles.worth} key={giveaway.worth}>
                {giveaway.worth}
              <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
              </ThemedText>
                <Button mode="contained"
                  onPress={() => Linking.openURL(giveaway.open_giveaway_url || giveaway.open_giveaway)}
                  key={giveaway.open_giveaway_url || giveaway.open_giveaway}>Get Giveaway</Button>
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
    gap:3,
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
    paddingBottom: 20, // Space at the bottom of the scrollable content
    gap: 10,
  },
  giveawayText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  thumbnail: {
    width: 50,
    height: 60,
    marginBottom: 10,
  },
});

