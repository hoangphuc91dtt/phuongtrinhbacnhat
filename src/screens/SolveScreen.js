import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LinearEquationSolver = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const solveEquation = () => {
    const coeffA = parseFloat(a);
    const coeffB = parseFloat(b);

    if (isNaN(coeffA) || isNaN(coeffB)) {
      Alert.alert('Error', 'Please enter valid coefficients');
      return;
    }

    if (coeffA === 0) {
      setResult('Phương trình không phải là phương trình bậc nhất.');
    } else {
      const x = -coeffB / coeffA;
      setResult(`Nghiệm của phương trình là: x = ${x}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
        placeholder="Nhập hệ số a"
        onChangeText={text => setA(text)}
        value={a}
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
        placeholder="Nhập hệ số b"
        onChangeText={text => setB(text)}
        value={b}
        keyboardType="numeric"
      />
      <Button title="Giải" onPress={solveEquation} />
      <Text style={{ marginTop: 20 }}>{result}</Text>
    </View>
  );
};

export default LinearEquationSolver;
