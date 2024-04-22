import React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params) =>
  navigationRef.current?.navigate(name, params);

const push = (...args) =>
  navigationRef.current?.dispatch(StackActions.push(...args));

const goBack = () => navigationRef.current?.goBack();

export {
  navigationRef,
  navigate,
  push,
  goBack,
};
