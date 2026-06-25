import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';

import UserCard from '@/src/components/UserCard';
import { getGithubUser } from '@/src/api/github';
import { GithubUser } from '@/src/types/github';

export default function ProfileScreen() {
  const { username } = useLocalSearchParams();

  const [user, setUser] = useState<GithubUser | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const data = await getGithubUser(String(username));

      setUser(data);
    } catch (error) {
      setUser(null);
      console.error(error);
      alert('유저를 찾을 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return <View>{user && <UserCard user={user} />}</View>;
}
