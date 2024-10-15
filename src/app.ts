import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { AppNavigator } from './navigation/AppNavigator';
import { AppProvider } from './context/AppProvider';

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(
  React.createElement(
    AppProvider,
    {},
    React.createElement(AppNavigator, {}, null)
  )
);