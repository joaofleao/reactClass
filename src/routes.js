/**
 * Rotas para todas as páginas da aplicação
 *
 * @author           João Leão
 * @example          <Routes/>
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ModelScreen from './screens/ModelScreen';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="ModelScreen" component={ModelScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
