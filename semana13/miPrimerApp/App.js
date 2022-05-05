import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Componente from './src/components/componente';
import MiComponente from './src/components/MiComponente';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MiComponente /> */}
      <Text style = {styles.textwhite}> Dominos's</Text>
      <Componente />
      <Text style = {styles.textwhite}> A mi me gusta comer en <Text style = {styles.textblue}>Domino's</Text></Text>
      <ScrollView>
      <Image style= {styles.img} source={{uri: 'https://webiconspng.com/wp-content/uploads/2017/09/Pizza-PNG-Image-72427.png'}}></Image>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textwhite: {
    color: 'black',
    fontSize: 18,
  },
  textblue: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold'
  },
  img: {
    height: 2000,
    width: 2000
  }
});
