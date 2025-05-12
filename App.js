import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './Components/HeaderComponent';
import PostComponent from './Components/PostComponent';
import FooterComponent from './Components/FooterComponent';

export default function App() {
  return (
    // Div = view
    // h1, p, etc = Text
    
    <SafeAreaView style={styles.container}>
     <HeaderComponent />

     <View style={{ flex: 1, paddintBottom: 70 }}>
       <PostComponent />
     </View>
    
     <FooterComponent />
     <StatusBar style='light'/>
    </SafeAreaView>
  );
}

//This styles is created using a vuilt in component called StyleSheet that allows us to style our components

// flex 1 takes up all of the available space of the parent component
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
});
