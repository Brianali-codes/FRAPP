import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



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
    backgroundColor:'black',
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
