import { View, Text } from 'react-native'
import React from 'react'
import '@/global.css'
import PreviousEvent from '@/widgets/PreviousEvent'
import NextEvent from '@/widgets/NextEvent'
import ConstructorsChampionsip from '@/widgets/ConstructorsChampionsip'
import DriversChampionship from '@/widgets/DriversChampionship'
const Index = () => {
  return (
  <View className='  w-full flex-1 justify-center  '>
    <Text className=' text-center '></Text>
    <PreviousEvent/>
    <NextEvent/>
    {/* <ConstructorsChampionsip/>   */}
    {/* <DriversChampionship/> */}
    </View>
  )
}

export default Index 