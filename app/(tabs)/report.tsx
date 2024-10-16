import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider, TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Linking } from 'react-native';
import { useState } from 'react';
import { Alert } from 'react-native';

export default function HomeScreen() {

    const [inputValue, setInputValue] = useState('');
    const handleBugReport = () => {
      if (!inputValue.trim()) {
        Alert.alert('Error', 'Please describe the issue before submitting.');
        return;
      }
    
      const subject = encodeURIComponent('Bug Report');
      const body = encodeURIComponent(inputValue);
      const mailtoLink = `mailto:gamingbruv34@gmail.com?subject=${subject}&body=${body}`;
    
      Linking.canOpenURL(mailtoLink)
        .then((supported) => {
          if (supported) {
            Linking.openURL(mailtoLink).catch(err => console.error('An error occurred', err));
          } else {
            Alert.alert('Error', 'Unable to open email client');
          }
        })
        .catch((err) => console.error('An error occurred', err));
    };
    
  return (
      <ThemedView style={styles.stepContainer}>
         <ThemedText style={styles.text}>
        <TabBarIcon name={'bug'} style={styles.icons}/>
        REPORT BUG
      </ThemedText>
        <ScrollView style={styles.scrollContainer}>
            <ThemedText style={styles.text2}>Having Trouble with the App? or have you noticed some bugs in the application? please file a report to let us know.</ThemedText>
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <TextInput
                  mode="flat"
                  label="Bug report"
                  placeholder="Describe your issue"
                  value={inputValue}
                  onChangeText={(text) => setInputValue(text)} 
                  right={<TextInput.Affix text="/100"/>}
            />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <ThemedText style={styles.text2}>Make sure to submit the report once redirected to the mail app.</ThemedText>
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Button mode="contained" onPress={handleBugReport}>
              File A Report
            </Button>

            
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <ThemedText style={styles.text2}>if you have a more detailed report you can file an issue at the github repository and feedback will be provided as soon as possible.</ThemedText>
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Button mode="contained"onPress={() => Linking.openURL('https://github.com/Brianali-codes/FRAPP')}>
              Go to the Github page
            </Button>
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />
            <Divider style={{ marginVertical: 10, height: 1, backgroundColor: 'transparent' }} />


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
    backgroundColor: '#1b2838',
    gap: 8,
    marginBottom: 8,
    padding:5,
  },
  text: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:5,
    gap:5,
  },
  icons: {
    marginBottom: 3,
  },
  text2: {
    color:'white',
  },
  scrollContainer:{
    padding:5,
    margin:5,
    gap:10,
    display:'flex',
    flexDirection:'column',
    backgroundColor: '#1b2838',
  },
});
