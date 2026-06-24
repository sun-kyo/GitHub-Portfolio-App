import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function HomeScreen() {
  const [input, setInput] = useState('');

  return (
    <View>
      <Text>GitHub Portfolio</Text>
      <TextInput
        placeholder="username 입력"
        value={input}
        onChangeText={(e) => {
          setInput(e);
        }}
      />
      <Pressable
        onPress={() => {
          console.log(input);
        }}
      >
        <Text>검색</Text>
      </Pressable>
    </View>
  );
}
