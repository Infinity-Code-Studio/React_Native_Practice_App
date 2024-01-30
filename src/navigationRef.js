import * as React from 'react';
export const isReadyRef = React.createRef();
import { CommonActions, StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function reset(...args) {
  navigationRef.current?.dispatch(CommonActions.reset(...args));
}
export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}
export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}