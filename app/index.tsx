import { View, Text } from 'react-native'
import React from 'react'
import '@/global.css'
import PreviousEvent from '@/widgets/PreviousEvent'
import NextEvent from '@/widgets/NextEvent'
import ConstructorsChampionsip from '@/widgets/ConstructorsChampionsip'
import DriversChampionship from '@/widgets/DriversChampionship'
import F1NextEvent from '@/widgets/F1NextEvent'


const Index = () => {
  return (
  <View className='  w-full flex-1 justify-center  '>
    <Text className=' text-center '></Text>
    <PreviousEvent/>
    
    <F1NextEvent/>

    </View>
  )
}

export default Index 