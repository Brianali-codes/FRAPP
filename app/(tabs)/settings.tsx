import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}>
        <TabBarIcon name={'settings'} style={styles.icons}/>
          SETTINGS
        </ThemedText>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <ThemedText style={styles.text}>Like The app? star us on github.</ThemedText>
          <Button mode="contained"
                  onPress={() => Linking.openURL('https://github.com/Brianali-codes/FRAPP')}
          >Star Us</Button>
        </ScrollView>
        
        
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
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:5,
    gap:5,
  },
  scrollViewContent: {
    paddingBottom: 20, // Space at the bottom of the scrollable content
    gap: 10,
    backgroundColor:'#1b2838',
  },
  icons: {
    marginBottom: 4,
    fontSize:21,
  },
});
