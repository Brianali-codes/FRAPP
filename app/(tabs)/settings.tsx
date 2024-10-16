import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';


export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>
        <ThemedText  style={styles.text} >SETTINGS</ThemedText>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          
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
    color:'white',
    fontFamily: 'sans-serif',
    fontWeight:'bold',
    fontSize: 20,
  },
  scrollViewContent: {
    paddingBottom: 20, // Space at the bottom of the scrollable content
    gap: 10,
  },
});
