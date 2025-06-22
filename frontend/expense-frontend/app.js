import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpenseListScreen from './app/ExpenseListScreen';
import AddExpenseScreen from './app/AddExpenseScreen';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Expenses">
          <Stack.Screen name="Expenses" component={ExpenseListScreen} />
          <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
