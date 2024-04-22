import React, {ReactNode, useState} from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';
import { goBack } from '../helper/navigationServices';

type LayoutProps = {
  children: ReactNode;
  withBack?: boolean;
};

const Layout: React.FC<LayoutProps> = ({children, withBack = false}) => {
  return (
    <SafeAreaView style={tw`bg-[#131830] h-full flex-1 p-5`}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {withBack && (
        <TouchableOpacity style={[tw`self-start`]} onPress={() => goBack()}>
          <MaterialIcons name="arrow-circle-left" color="white" size={25} />
        </TouchableOpacity>
      )}
      {children}
    </SafeAreaView>
  );
};

export default Layout;
