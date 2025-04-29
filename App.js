import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    // Div = view
    // h1, p, etc = Text
    
    <SafeAreaView style={styles.container}>
      <Text>First react native</Text>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

//This styles is created using a vuilt in component called StyleSheet that allows us to style our components

// flex 1 takes up all of the available space of the parent component
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
