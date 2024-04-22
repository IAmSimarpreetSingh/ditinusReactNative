import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import tw from 'twrnc';

interface CustomButtonProps {
  onPress: () => void;
  disable?: boolean;
  loading?: boolean;
  title: string;
  style?: any;
  textStyle?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  disable = false,
  loading = false,
  title,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[
        disable ? tw`bg-[#19b5cf]` : tw`bg-[#19b5cf]`,
        tw`p-3 rounded-md items-center `,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color="white" size={20} />
      ) : (
        <Text style={[tw`text-white font-bold text-base`, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
