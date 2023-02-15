import React from 'react'
import { SafeAreaView, StatusBar, Platform } from 'react-native'
import Header from '../components/Header'
import MovieCards from '../components/MovieCards'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#f0f0f0", flex:1, paddingTop: Platform.OS == 'android'? StatusBar.currentHeight : 0}}>
        <MovieCards/>
    </SafeAreaView>
   
  )
}

export default HomeScreen