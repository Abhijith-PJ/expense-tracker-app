import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from "react-native-paper"
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://192.168.1.34:8080/api/expenses';

export default function AddExpenseScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await axios.post(API_URL, {
        title,
        amount: parseFloat(amount),
        date,
        category,
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error submitting expense:', error.message);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput label="Title" value={title} onChangeText={setTitle} style={{ marginBottom: 8 }} />
      <TextInput label="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={{ marginBottom: 8 }} />
      <TextInput label="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} style={{ marginBottom: 8 }} />
      <TextInput label="Category" value={category} onChangeText={setCategory} style={{ marginBottom: 16 }} />
      <Button mode="contained" onPress={handleSubmit}>Submit</Button>
    </View>
  );
}
