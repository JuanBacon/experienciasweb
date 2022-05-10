//React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
//Componentes
import MiComponente from './src/components/MiComponente';
import Componente from './src/components/Componente';
import User from './src/screens/User';

const menuNavigation = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <MiComponente /> */}
    //   <Text style = {styles.textwhite}> Dominos's</Text>
    //   <Componente />
    //   <Text style = {styles.textwhite}> A mi me gusta comer en <Text style = {styles.textblue}>Domino's</Text></Text>
    //   <ScrollView>
    //   <Image style= {styles.img} source={{uri: 'https://webiconspng.com/wp-content/uploads/2017/09/Pizza-PNG-Image-72427.png'}}></Image>

    //   </ScrollView>
    // </View>
    <NavigationContainer>
      <menuNavigation.Navigator>
        <menuNavigation.Screen name ="User" component={User} options = {{tabBarIcon: () => icono ('happy-outline')}}></menuNavigation.Screen>
        <menuNavigation.Screen name ="Info" component={Componente} options = {{tabBarIcon: () => icono ('information-outline')}}></menuNavigation.Screen>
      </menuNavigation.Navigator>
    </NavigationContainer>
  );
}


function icono (iconName){
return(<Ionicons name={iconName} size ={30}></Ionicons>)
}

//Estilos para la creacion logo Dominos
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
