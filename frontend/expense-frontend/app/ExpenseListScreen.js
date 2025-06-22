import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const API_URL = 'http://192.168.1.34:8080/api/expenses';

export default function ExpenseListScreen() {
  const navigation = useNavigation();
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response);
      
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchExpenses);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={() => navigation.navigate('Add Expense')}>
        Add New Expense
      </Button>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 8 }}>
            <Card.Title title={item.title} subtitle={`${item.category} • ₹${item.amount}`} />
            <Card.Content>
              <Text>{item.date}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
