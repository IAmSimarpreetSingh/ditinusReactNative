import React from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import CustomButton from '../CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface CustomModalProps {
  visible: boolean;
  text: string;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, text, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={[tw`flex-1 justify-center items-center bg-black bg-opacity-50`]}>

        <View style={[tw`bg-white rounded-lg p-6 w-4/5 items-center flex gap-3`]}>
      <AntDesign name='infocirlce' color='blue' size={16} />
      <Text style={[tw`text-3xl text-center font-bold`]}>Explanation:</Text>

        <View>
          <Text style={[tw`text-lg text-center`]}>{text}</Text>
          <CustomButton style={tw`mt-3`} title='OK' onPress={() => onClose()} />
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
