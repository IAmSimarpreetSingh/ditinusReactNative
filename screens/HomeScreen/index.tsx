import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { CustomButton } from '../../components'
import { navigate } from '../../helper/navigationServices'
import Layout from '../../layout'

const HomeScreen = () => {
  return (
    <Layout>
      <View style={tw`flex-col h-full items-center justify-center`}>
        <View style={tw`flex gap-5`}>
          <Text style={tw`text-white text-2xl`}>Ditinus React Native</Text>
          <CustomButton title='Start Quiz' onPress={() => navigate('QuizScreen')} />
        </View>
      </View>
    </Layout>
  )
}

export default HomeScreen