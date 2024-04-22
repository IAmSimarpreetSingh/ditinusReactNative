import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../CustomButton';

interface Option {
  ques: string;
  value: string;
  correct: boolean;
  correctAnswer: string;
}

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuestionnaireProps {
  questions: Question[];
  selectedOptions: Option[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  openModal: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({
  questions,
  setSelectedOptions,
  selectedOptions,
  openModal
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleOptionSelect = (option: string, index: number) => {
    if (selectedOptions[currentQuestion]) return;

    const isCorrect = option === questions[currentQuestion].answer;
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = {
      ques: questions[currentQuestion].question,
      value: option,
      correct: isCorrect,
      correctAnswer: questions[currentQuestion].answer,
    };
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    }
  };

  const handleFinish = () => {
    console.log('SelectedOptions : ', JSON.stringify(selectedOptions))
  }

  return (
    <ScrollView contentContainerStyle={tw`flex-grow justify-center p-4 rounded-lg`}>
      <View style={[tw`gap-5`]}>
        <View style={[tw`flex-col gap-5`]}>
          <Text style={tw`text-gray-300`}>Review Test</Text>
          <View style={tw`flex-row`}>
            <Text style={tw`text-white text-3xl font-bold`}>{`Question ${(currentQuestion + 1).toString().padStart(2, '0')}/`}</Text>
            <Text style={tw`text-white text-xl`}>{questions.length}</Text>
          </View>
          <View style={[tw`flex-row`]}>
            {questions.map((_, index) => (
              <View
                key={index}
                style={[
                  tw`w-4 h-1 rounded-md`,
                  selectedOptions[index]
                    ? selectedOptions[index].correct
                      ? tw`bg-green-500`
                      : tw`bg-red-500`
                    : tw`bg-gray-500`,
                  currentQuestion === index ? tw`mx-1` : tw`mx-1.5`
                ]}
              />
            ))}
          </View>
        </View>

        <Text style={tw`text-white text-2xl py-10`}>
          {questions[currentQuestion].question}
        </Text>

        <View style={tw`flex-row flex-wrap gap-4`}>
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = selectedOptions[currentQuestion] && selectedOptions[currentQuestion].value === option;
            
            const isCorrect = selectedOptions[currentQuestion] && selectedOptions[currentQuestion].correctAnswer === option;

            const highlightColor = isSelected ? (isCorrect ? 'green' : 'red') : isCorrect ? 'green' : 'white';
            return (
              <TouchableOpacity
                key={index}
                style={[
                  tw`p-2 rounded-md w-full flex-row justify-between items-center`,
                  { borderColor: highlightColor, borderWidth: 2 },
                ]}
                onPress={() => handleOptionSelect(option, index)}
                disabled={selectedOptions[currentQuestion] !== undefined}>
                <Text style={tw`text-white`}>{option}</Text>
                { isSelected ? 
                  (isCorrect ? <AntDesign name='checkcircle' color='green' size={16} /> :  <Entypo name='circle-with-cross' color='red' size={16} />  ) :
                  
                  isCorrect  ? <AntDesign name='checkcircle' color='green' size={16} /> : 
                  
                  <View style={tw`w-4 h-4 border border-white rounded-full`}/>}
              </TouchableOpacity>
            );
          })}
        </View>

         <TouchableOpacity style={tw`self-end py-2`} onPress={() => openModal()} >
            <AntDesign name='infocirlce' color='yellow' size={16} />
          </TouchableOpacity>   
        {currentQuestion < questions.length - 1 ? (
          <CustomButton title="Next" onPress={handleNext} />
        )
        : <CustomButton title="Finish" onPress={handleFinish} />
         }
      </View>
    </ScrollView>
  );
};

export default Questionnaire;
