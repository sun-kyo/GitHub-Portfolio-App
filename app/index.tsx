import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import { GithubUser } from '@/src/types/github';
import { getGithubUser } from '@/src/api/github';
import { styles } from '@/src/styles/home.styles';
import UserCard from '@/src/components/UserCard';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<GithubUser | null>(null);

  const searchUser = () => {
    if (!username.trim()) return;

    router.push({
      pathname: '/profile/[username]',
      params: {
        username,
      },
    });
    setUsername('');
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
