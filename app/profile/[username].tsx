import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import UserCard from '@/src/components/UserCard';
import RepoCard from '@/src/components/RepoCard';
import { getGithubRepos, getGithubUser } from '@/src/api/github';
import { GithubRepo, GithubUser } from '@/src/types/github';

export default function ProfileScreen() {
  const { username } = useLocalSearchParams<{
    username: string;
  }>();

  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const [userData, repoData] = await Promise.all([getGithubUser(username), getGithubRepos(username)]);

      setUser(userData);
      setRepos(repoData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={repos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <RepoCard repo={item} />}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <>
          {user && <UserCard user={user} />}

          <Text style={styles.title}>Repositories ({repos.length})</Text>
        </>
      }
      ListEmptyComponent={<Text style={styles.emptyText}>Repository가 없습니다.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: '700',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});
