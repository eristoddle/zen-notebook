import React from 'react';

export const navigationRef: any = React.createRef();

export function navigate(name: any, params = {}): void {
  navigationRef.current?.navigate(name, params);
}

export function getRoutes(): void {
  return navigationRef.current?.getRootState().routes;
}

export function getCurrentRoute(): void {
  return navigationRef.current?.getCurrentRoute();
}

export function navigateBack(): void {
  navigationRef.current?.goBack();
}
