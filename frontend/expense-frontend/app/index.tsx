import { router } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';


export default function HomeScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 40 }}>Expense Tracker</Text>

      <Button
        mode="contained"
        onPress={() => router.push('/ExpenseListScreen')}
        style={{ marginBottom: 20, width: '100%' }}
      >
        View Expenses
      </Button>

      <Button
        mode="outlined"
        onPress={() => router.push('/AddExpenseScreen')}
        style={{ width: '100%' }}
      >
        Add New Expense
      </Button>
    </View>
  );
}
