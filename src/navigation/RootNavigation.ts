import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import React from 'react';
import { RootStackParamList } from '../types/RootStackParamList';

export const navigationRef = React.createRef<NavigationContainerRefWithCurrent<RootStackParamList>>();

export function navigate(name: any, params = {}): void {
  navigationRef.current?.navigate(name, params);
}

export function getRoutes(): any {
  return navigationRef.current?.getRootState().routes;
}

export function getCurrentRoute(): any {
  return navigationRef.current?.getCurrentRoute();
}

export function navigateBack(): void {
  navigationRef.current?.goBack();
}
