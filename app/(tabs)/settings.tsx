import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';


export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.text}>
        <TabBarIcon name={'settings'} style={styles.icons}/>
          GIVEAWAYS
        </ThemedText>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <ThemedText style={styles.text}>Like The app? Rate us on the google or appstore.</ThemedText>
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
    backgroundColor:'#1b2838',
  },
  icons: {
    marginTop: 5,
  },
});
