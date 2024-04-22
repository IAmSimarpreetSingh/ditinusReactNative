import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../layout'
import { CustomModal, Questionnaire } from '../../components'
import QuestionAns from '../../questionAnswer.json'

interface Option {
    ques: string;
    value: string;
    correct: boolean;
    correctAnswer: string; 
  }

const QuizScreen = () => {
   const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
   const [modalVisible, SetModalVisible] = useState<boolean>(false)

   const closeModal = () => SetModalVisible(false)

   const openModal = () => SetModalVisible(true)

  return (
    <Layout withBack>
        <Questionnaire
        questions={QuestionAns}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        openModal={openModal}
      />
      <CustomModal visible={modalVisible} text="While blood cells, also known as leukocytes, play a crucial role in the immune system by identfying and fighting off pathogens such as viruses, bacteria, and other harmfull." onClose={closeModal} />
    </Layout>
  )
}

export default QuizScreen