import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

import { GithubUser } from '@/src/types/github';
import { getGithubUser } from '@/src/api/github';
import { styles } from '@/src/styles/home.styles';
import UserCard from '@/src/components/UserCard';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<GithubUser | null>(null);

  const searchUser = async () => {
    try {
      const data = await getGithubUser(username);
      setUsername('');
      setUser(data);
    } catch (error) {
      setUser(null);
      console.error(error);
      alert('유저를 찾을 수 없습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Portfolio</Text>

      <TextInput value={username} onChangeText={setUsername} placeholder="Github Username" style={styles.input} />

      <Pressable style={styles.button} onPress={searchUser}>
        <Text>검색</Text>
      </Pressable>

      {user && <UserCard user={user} />}
    </View>
  );
}
