import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView } from 'react-native';
import { MovieContext } from './Context';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';


export default function App() {
  
  return (
    <>
    <MovieContext>
    <StackNavigator/>
    <StatusBar style='auto'/>
    </MovieContext>
    
    </>
    
  );
}

