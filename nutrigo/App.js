import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigations/Navigation';
import AlimentoProvider from './Context/AlimentoContext';

export default function App() {
  return (
    <AlimentoProvider>
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
    </AlimentoProvider>
  ); 
}
